export function cellHandler(cell, column) {
  switch(column) {
    case 'A':
      return handleEmail(cell)
    default:
      return handleDefault(cell)
  }
}

function handleEmail(cell) {
  if (typeof cell !== 'undefined' && cell.w.search('@') !== -1) {
    return cell.w
  } else {
    return 'EMPTY-CELL'
  }
}

function handleDefault(cell) {
  if (typeof cell !== 'undefined') {
    return cell.w
  } else {
    return 'EMPTY-CELL'
  }
}
