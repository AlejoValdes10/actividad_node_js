var fs = require('fs');
var path = require('path');

// Paso 1: Crear la carpeta, el archivo y añadir texto (comentado)

/*

var dirPath = path.join(__dirname, 'mi-carpeta');
var filePath = path.join(dirPath, 'mi-archivo.txt');
//Crear directorio
fs.mkdir(dirPath, { recursive: true }, function (err) {
if (err) throw err;
//Crear archivo y agregar texto
fs.writeFile(filePath, 'Este es un texto de prueba.', function (err) {
if (err) throw err;
console.log('Archivo creado y texto añadido.');
});
);

// Paso 2: Eliminar contenido del archivo 
var filePath = path.join(__dirname, 'mi-carpeta', 'mi-archivo.txt');
console.log('Ruta del archivo:', filePath);
fs.access(filePath, fs.constants.F_OK, function (err) {
if (err) {
console.error('El archivo no existe.');
return;
}
//Eliminar texto del archivo
fs.writeFile(filePath, '', function (err) {
if (err) throw err;
console.log('Texto eliminado del archivo.');
});
});

*/

// Paso 3: Eliminar archivo y carpeta
var filePath = path.join(__dirname, 'mi-carpeta', 'mi-archivo.txt');
var dirPath = path.join(__dirname, 'mi-carpeta');
//Eliminar archivo
fs.unlink(filePath, function (err) {
if (err) throw err;
//Eliminar directorio
    fs.rmdir(dirPath, function (err) {
        if (err) throw err;
        console.log('Archivo y carpeta eliminados.');
    });
});
