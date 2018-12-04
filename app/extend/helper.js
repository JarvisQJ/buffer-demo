const Excel = require('exceljs');

exports.buildExcel = (data, columns) => {
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet();
  worksheet.columns = columns;
  worksheet.addRows(data);
  // 这里workbook.xlsx.writeBuffer()返回promise对象，所以外部调用需要await
  return workbook.xlsx.writeBuffer();
};

