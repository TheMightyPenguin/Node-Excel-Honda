import XLSX from 'xlsx'
import * as constants from './constants'
import { cellHandler } from './cellHandler'

const workbook = XLSX.readFile('recall_citas.xlsx')
const sheetName = workbook.SheetNames[0]
const workSheet = workbook.Sheets[sheetName]

// console.log(constants)

for (let row = constants.startingRow; row < constants.rows - 380; row++) {
  let buffer = []
  for (let column of constants.columns) {
    let position = `${column}${row}`
    let cell = workSheet[position]
    buffer.push(cellHandler(cell, column));
  }
  console.log(buffer.join(", "))
}
