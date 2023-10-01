interface rowI {
  id?: number
  equipmentCosts: number,
  estimatedProfit: number,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: number,
  parentId: number|null,
  rowName: string,
  salary: number,
  supportCosts: 0,
}

export type { rowI }