import { rowI } from "../../../../../types/types"

interface TableRowProps {
  row: rowI,
  child?: boolean,
  prevuiosRowChildrens?: number,
  level: number,
  secondChild?: boolean,
}

export type { TableRowProps }
