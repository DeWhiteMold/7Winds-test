interface rowI {
  id?: number,
  child?: rowI[],
  equipmentCosts: number,
  estimatedProfit: number,
  machineOperatorSalary: number,
  mainCosts: number,
  materials: number,
  mimExploitation: number,
  overheads: number,
  parentId: number|null,
  rowName: string,
  salary: number,
  supportCosts: number,
}

export type { rowI }