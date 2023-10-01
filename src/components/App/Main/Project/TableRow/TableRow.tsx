import React, { FC, useEffect, useState } from 'react';
import './TableRow.scss'
import { TableRowProps } from './TableRowProps';
import { SvgIcon } from '@mui/material';
import { Feed } from '@mui/icons-material';
import Trash from '../../../../../Images/TrashFill.svg'

const TableRow: FC<TableRowProps> = ({row, parentId, addChildRow, deleteRow, createNewRow, editRow}) => {
  const [isOnEditMode, setIsOnEditMode] = useState<boolean>(false)

  const [nameValue, setNameValue] = useState<string>(row.rowName)
  const [salaryValue, setSalaryValue] = useState<number>(row.salary)
  const [equipmentCostsValue, setEquipmentCostsValue] = useState<number>(row.equipmentCosts)
  const [supportCostsValue, setSupportCostsValue] = useState<number>(row.supportCosts)
  const [estimatedProfitValue, setEstimatedProfitValue] = useState<number>(row.estimatedProfit)

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setNameValue(e.target.value)
  }
  function handelSalaryChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 0;
    setSalaryValue(value)
  }
  function handleEquipmentChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 0;
    setEquipmentCostsValue(value)
  }
  function handleSupportChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 0;
    setSupportCostsValue(value)
  }
  function handleEstimatedProfitChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : 0;
    setEstimatedProfitValue(value)
  }

  function switchEditMode() {
    setIsOnEditMode((state) => !state)
    
  }

  useEffect(() => {
    if(row.id === undefined) setIsOnEditMode(true)
  }, [])

  return (
        <tr className='table-row' onDoubleClick={switchEditMode}>
          <td>
            <div className="table-row__functions-box">
              {row.parentId !== null && <div className="table-row__connection-line"/>}
              <div className="table-row__functions">
                <button className="table-row__functions-btn">
                  <SvgIcon component={Feed} color='info' />
                </button>
                <button className="table-row__functions-btn ">
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
              <td>{row.rowName}</td>
              <td>{row.salary}</td>
              <td>{row.equipmentCosts}</td>
              <td>{row.supportCosts}</td>
              <td>{row.estimatedProfit}</td>
            </>
          }
        </tr> 
    
  )
}

export default TableRow;