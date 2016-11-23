import XLSX from 'xlsx'
import request from 'request'
import * as constants from './constants'
import { cellHandler } from './cellHandler'
import Cita from './cita'

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
  let data = {
    userEmail:   buffer[0],
    placa:       buffer[1],
    vin:         buffer[2],
    dealerEmail: buffer[3],
    fecha:       buffer[4],
    hora:        "12:00:00"
  }
  let cita = new Cita(data);
  cita.save();
}
