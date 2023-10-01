import { rowI } from "../types/types"

const url = 'http://185.244.172.108:8081/'
const entityId = 63150

const emptyRow: rowI = {
  parentId: null,
  equipmentCosts: 0,
  estimatedProfit: 0,
  machineOperatorSalary: 0,
  mainCosts: 0,
  materials: 0,
  mimExploitation: 0,
  overheads: 0,
  rowName: '',
  salary: 0,
  supportCosts: 0,
}

const mockProjects = [
  'По проекту', 'Объекты', 'РД', 'МТО', 'СМР', 'График', 'МиМ', 'Рабочие', 'Капвложения', 'Бюджет', 'Финансирование', 'Панорамы', 'Камеры', 'Поручения', 'Контрагенты',
]

export { url, entityId, emptyRow, mockProjects }