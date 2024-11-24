class ExcelColumnConverter {
    /**
     * Convert a number to an Excel column string
     * @param {number} number - The number to convert
     * @returns {string} - The corresponding Excel column string
     */
    static numberToColumn(number) {
        let columnLabel = '';

        while (number > 0) {
            const remainder = (number - 1) % 26;
            columnLabel = String.fromCharCode(remainder + 'A'.charCodeAt(0)) + columnLabel;
            number = Math.floor((number - 1) / 26);
        }

        return columnLabel;
    }

    /**
     * Convert an Excel column string to a number
     * @param {string} column - The Excel column string to convert
     * @returns {number} - The corresponding number
     */
    static columnToNumber(column) {
        let number = 0;

        for (let i = 0; i < column.length; i++) {
            number = number * 26 + (column.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
        }

        return number;
    }
}

module.exports = ExcelColumnConverter;
