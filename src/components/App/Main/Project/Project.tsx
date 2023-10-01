import React, { FC, useEffect, useState } from 'react';
import './Project.scss'
import { rowI } from '../../../../types/types';
import api from '../../../../utilits/Api';
import TableRow from './TableRow/TableRow';
import { emptyRow } from '../../../../consts/consts';

const Project: FC = () => {
  const [rows, setRows] = useState<rowI[]>([])

  function addRowTemplate(parentId: number): void {
    const newRow = {
      ...emptyRow,
      parentId: parentId,
    }
    setRows((rows) => [...rows, newRow])
  }

  function createNewRow(newRow: rowI): void {
    api.createRow(newRow)
      .then((res: rowI[]) => {
        setRows(res)
      })
  }

  function updateRow(editedRow: rowI): void {
    api.updateRow(editedRow)
      .then((res: rowI[]) => {
        setRows(res)
      })
  }

  function deleteRow(rowId: number): void {
    api.deleteRow(rowId)
      .then((res: rowI[]) => {
        setRows(res)
      })
  }

  useEffect(() => {
    api.getRows()
      .then((res: rowI[]) => {
        setRows(res)
      })
  }, [])

  return (
    <div className='project'>
      <span className="project__name">Строительно-монтажные работы</span>
      <table className="project__table">
        <tr>
          <th>Уровень</th>
          <th>Наименование работ</th>
          <th>Основная з/п</th>
          <th>Оборудование</th>
          <th>Накладные расходы</th>
          <th>Сметная прибыль</th>
        </tr>
        {
          rows.length > 0 ?
          rows.map((row) => {
            return <TableRow row={row} />
          }) :
          <TableRow row={emptyRow} />
        }
      </table>
    </div>
  )
}

export default Project;