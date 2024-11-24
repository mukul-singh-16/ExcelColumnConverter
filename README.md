# ExcelColumnConverter

npm install excel-column-converter



const ExcelColumnConverter = require('excel-column-converter');

console.log(ExcelColumnConverter.numberToColumn(28));    // Output: AB
console.log(ExcelColumnConverter.columnToNumber('AB'));  // Output: 28
