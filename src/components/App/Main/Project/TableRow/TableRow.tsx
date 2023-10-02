import React, { FC, useEffect, useState } from 'react'
import './TableRow.sass'
import { TableRowProps } from './TableRowProps'
import { SvgIcon } from '@mui/material'
import { Feed } from '@mui/icons-material'
import Trash from '../../../../../Images/TrashFill.svg'
import { rowI } from '../../../../../types/types'
import { emptyRow } from '../../../../../consts/consts'
import api from '../../../../../utilits/Api'

const TableRow: FC<TableRowProps> = ({row, child, level, prevuiosRowChildrens, secondChild}) => {
  const [isOnEditMode, setIsOnEditMode] = useState<boolean>(false)

  const [currentRow, setCurrentRow] = useState<rowI|null>(row)
  const [children, setChildren] = useState<rowI[]>([])

  const [nameValue, setNameValue] = useState<string>(row.rowName)
  const [salaryValue, setSalaryValue] = useState<number>(row.salary)
  const [equipmentCostsValue, setEquipmentCostsValue] = useState<number>(row.equipmentCosts)
  const [supportCostsValue, setSupportCostsValue] = useState<number>(row.supportCosts)
  const [estimatedProfitValue, setEstimatedProfitValue] = useState<number>(row.estimatedProfit)

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNameValue(e.target.value)
  }
  function handelSalaryChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 0
    setSalaryValue(value)
  }
  function handleEquipmentChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 0
    setEquipmentCostsValue(value)
  }
  function handleSupportChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 0
    setSupportCostsValue(value)
  }
  function handleEstimatedProfitChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 0
    setEstimatedProfitValue(value)
  }

  function switchEditMode(): void {
    setIsOnEditMode((state) => !state)
  }

  function handleNewRowAdd(): void {
    if(!isOnEditMode && row.id !== undefined) {
      const newRow = {
        ...emptyRow,
        parentId: row.id,
      }
      setChildren((rows) => [...rows, newRow])
      
    }
  }
  function hanldeDeleteRow(): void {
    if(row.parentId !== null && currentRow !== null && currentRow.id !== undefined) {
      api.deleteRow(currentRow.id)
        .then(() => {setCurrentRow(null)})
    }
  }

  function handleSubmit(e: KeyboardEvent): void {
    if(e.key === 'Enter' && isOnEditMode) {
      const rowToSend: rowI = {
        ...row,
        parentId: row.parentId || null,
        rowName: nameValue,
        salary: salaryValue,
        equipmentCosts: equipmentCostsValue,
        supportCosts: supportCostsValue,
        estimatedProfit: estimatedProfitValue,
      }
      
      if(currentRow?.id === undefined) {
        api.createRow(rowToSend)
          .then((res) => {
            const newParams = res.current
            setCurrentRow((row) => ({...row, ...newParams}))
            setIsOnEditMode(false)
          })
      } else {
        api.updateRow(rowToSend)
        .then((res) => {
          const newParams = res.current
          setCurrentRow((row) => ({...row, ...newParams}))
          setIsOnEditMode(false)
        })
      }
    }
    
  }

  useEffect(() => {
    if(row.id === undefined) setIsOnEditMode(true)
    if(row.child) setChildren(row.child)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', handleSubmit)
    return () => window.removeEventListener('keydown', handleSubmit)
  })

  return (
    currentRow &&
    <>
      <tr className='table-row' onDoubleClick={switchEditMode}>
        <td>
          <div className={`table-row__functions-box`} style={{marginLeft: `calc(20px*${level})`}}>
            {
              child && 
                <div className={
                  `table-row__connection-line 
                  ${secondChild && "table-row__connection-line_long"}`
                } 
                style={
                  { height: `calc(53px*${prevuiosRowChildrens !== undefined && prevuiosRowChildrens !== 1 && (prevuiosRowChildrens + 1)})` }
                }
              />
              }
            <div className="table-row__functions">
              <button className="table-row__functions-btn" onClick={handleNewRowAdd}>
                <SvgIcon component={Feed} color='info' />
              </button>
              <button className="table-row__functions-btn" onClick={hanldeDeleteRow}>
                <img src={Trash} alt='delete'/>
              </button>
            </div>
          </div>
        </td>
        {
          isOnEditMode ?
          <>
            <td>
              <input 
                type="text" className="table-row__input" 
                value={nameValue} onChange={handleNameChange}
              />
            </td>
            <td>
              <input 
                type="number" className="table-row__input" 
                value={salaryValue} onChange={handelSalaryChange}
              />
            </td>
            <td>
              <input 
                type="number" className="table-row__input" 
                value={equipmentCostsValue} onChange={handleEquipmentChange}
              />
            </td>
            <td>
              <input 
                type="number" className="table-row__input" 
                value={supportCostsValue} onChange={handleSupportChange}
              />
            </td>
            <td>
              <input 
                type="number" className="table-row__input"
                value={estimatedProfitValue} onChange={handleEstimatedProfitChange} 
              />
            </td>
          </> : 
          <>
            <td>{currentRow.rowName}</td>
            <td>{currentRow.salary}</td>
            <td>{currentRow.equipmentCosts}</td>
            <td>{currentRow.supportCosts}</td>
            <td>{currentRow.estimatedProfit}</td>
          </>
        }
      </tr>
      {
        children.map((childRow, index) => {
          let prevuiosRowChildrens = 0
          if(index > 0) {
            const prevuiosChild = children[index - 1]
            prevuiosRowChildrens = prevuiosChild.child?.length || 0
          }
          
          return (
            <TableRow 
              child level={level + 1} prevuiosRowChildrens={prevuiosRowChildrens + 1} 
              secondChild={index > 0} row={childRow} 
            />
          )
        })
      }
    </>
  )
}

export default TableRow