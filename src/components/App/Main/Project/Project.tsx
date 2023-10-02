import React, { FC, useEffect, useState } from "react"
import "./Project.sass"
import { rowI } from "../../../../types/types"
import api from "../../../../utilits/Api"
import TableRow from "./TableRow/TableRow"
import { emptyRow } from "../../../../consts/consts"

const Project: FC = () => {
  const [rows, setRows] = useState<rowI[]>([])

  useEffect(() => {
    api.getRows().then((res: rowI[]) => {
      setRows(res)
    })
  }, [])

  return (
    <div className="project">
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
        {rows.length > 0 ? (
          rows.map((row) => {
            return (
              <TableRow
                row={row}
                level={0}
              />
            )
          })
        ) : (
          <TableRow
            row={emptyRow}
            level={0}
          />
        )}
      </table>
    </div>
  )
}

export default Project
