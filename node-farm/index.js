import * as fs from 'fs';
//const fs = require('fs');

const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textInput);

const textOur = `This what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`
fs.writeFileSync('./txt/output.txt', textOur);
console.log('File Written');
//const hello = 'Hello World';
//console.log(hello);