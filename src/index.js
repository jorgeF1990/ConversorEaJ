const XLSX = require('xlsx');
const fs = require('fs');

const excelToJSON = () => {
    const workbook = XLSX.readFile(
        "C:\\Users\\Jorge\\Documents\\ConversorEaJ\\Libro2.xlsx"
    );
    const sheetNames = workbook.SheetNames;
    const datos = XLSX.utils.sheet_to_json(workbook.Sheets[sheetNames[0]]);

    // Guarda el resultado en un archivo JSON
    fs.writeFileSync(
        "C:\\Users\\Jorge\\Documents\\ConversorEaJ\\Libro2.json",
        JSON.stringify(datos, null, 2),
        "utf8"
    );
    console.log('Archivo Libro2.json generado correctamente.');
};
excelToJSON();