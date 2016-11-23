import * as constants from './constants'

export function cellHandler(cell, column) {
  switch(column) {
    case 'A':
      return handleEmail(cell)
    case 'D':
      return handleDealer(cell)
    default:
      return handleDefault(cell)
  }
}

function handleEmail(cell) {
  if (typeof cell !== 'undefined' && cell.w.search('@') !== -1) {
    return cell.w
  } else {
    return constants.emptyCellValue
  }
}

function handleDealer(cell) {
  if (typeof cell !== 'undefined') {
    return constants.dealersEmail[cell.w]
  } else {
    return constants.emptyCellValue
  }
}

function handleDefault(cell) {
  if (typeof cell !== 'undefined') {
    return cell.w
  } else {
    return constants.emptyCellValue
  }
}
