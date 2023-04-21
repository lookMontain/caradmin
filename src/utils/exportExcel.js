
import * as XLSX from 'xlsx'
function exportToExcel (header, tabledata = [], fileName = '表') {
  const list = []
  const hList = []
  //   const key2List = []
  header.forEach(item => {
    const [key1] = item.split('=')
    hList.push(key1)
  })
  
  tabledata.forEach(row => {
    const obj = {}
    header.forEach(item => {
      const [key1, key2] = item.split('=')
      obj[key1] = row[key2]
    })

    list.push(obj)
  })
  // 创建book
  var wb = XLSX.utils.book_new()
  // json转sheet
  var ws = XLSX.utils.json_to_sheet(list, { header: hList })
  //   // 设置列宽
  //   ws['!cols'] = [
  //     { width: 15 },
  //     { width: 15 },
  //     { width: 15 },
  //     { width: 15 },
  //     { width: 10 }
  //   ]
  //   var timestamp = (new Date()).getTime()
  // sheet写入book
  XLSX.utils.book_append_sheet(wb, ws, 'file')
  // 输出
  XLSX.writeFile(wb, fileName + '.xlsx')
}

export default {
  exportToExcel
}
