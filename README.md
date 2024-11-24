# Excel Column Converter

**Excel Column Converter** is a simple npm package that helps convert numbers to Excel-style column names 
(e.g., `1 → A`, `28 → AB`) and Excel column names back to numbers (e.g., `A → 1`, `AB → 28`).

## Installation

Install the package via npm:

```bash
npm install excel-column-converter
```

## Usage

Import the package and use the provided functions:

### Example:

```javascript
const ExcelColumnConverter = require('excel-column-converter');

// Convert number to Excel column string
console.log(ExcelColumnConverter.numberToColumn(1));     // Output: A
console.log(ExcelColumnConverter.numberToColumn(28));    // Output: AB
console.log(ExcelColumnConverter.numberToColumn(16384)); // Output: XFD

// Convert Excel column string to number
console.log(ExcelColumnConverter.columnToNumber('A'));   // Output: 1
console.log(ExcelColumnConverter.columnToNumber('AB'));  // Output: 28
console.log(ExcelColumnConverter.columnToNumber('XFD')); // Output: 16384
```

## API

### `numberToColumn(number)`

Converts a number to an Excel column string.

#### Parameters:
- `number` (integer): The number to convert (e.g., 1, 28, 16384).

#### Returns:
- `string`: The corresponding Excel column string.

#### Example:
```javascript
ExcelColumnConverter.numberToColumn(28); // Output: "AB"
```

---

### `columnToNumber(column)`

Converts an Excel column string to a number.

#### Parameters:
- `column` (string): The Excel column string (e.g., "A", "AB", "XFD").

#### Returns:
- `number`: The corresponding number.

#### Example:
```javascript
ExcelColumnConverter.columnToNumber("AB"); // Output: 28
```

---

## Run Tests

You can test the package locally by running:

```bash
node test.js
```

Ensure that `test.js` contains appropriate test cases.

---

## License

This project is licensed under the [MIT License](./LICENSE).

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the package.

---

## Author

**Mukul Singh**
