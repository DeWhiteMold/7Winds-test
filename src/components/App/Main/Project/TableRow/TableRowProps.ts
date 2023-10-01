import { rowI } from "../../../../../types/types";

interface TableRowProps {
  row: rowI,
  parentId?: number|null,
  addChildRow?:(rowId: number) => void,
  deleteRow?:(rowId: number) => void,
  createNewRow?:(newRow: rowI) => void,
  editRow?:(newRow: rowI) => void,
}

export type { TableRowProps }

