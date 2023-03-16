//import * as fs from 'fs';
//const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
//import * as http from 'http';

//////////////////////////////////////////////////////////
//Files

// const textInput = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textInput);

// const textOur = `This what we know about the avocado: ${textInput}.\nCreated on ${Date.now()}`
// fs.writeFileSync('./txt/output.txt', textOur);
// console.log('File Written');
//const hello = 'Hello World';
//console.log(hello);

//non-blocking as
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('ERROR')
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);

//             fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written ')
//             })
//         });
//     });
// });
// console.log('Will read file');

/////////////////////////////////////////////////////
//Server
const server = http.createServer((request, response) => {
    //console.log(request.url);

    const pathName = request.url;
    if(pathName === '/' || pathName === '/overview') {
        response.end('This is the OVERVIEW');
    } else if (pathName === '/product') {
        response.end('This is a PRODUCT');
    } else {
        response.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        });
        response.end('<h1>Page not FOUND!!!</h1>');
    }
    //response.end('Hello from the server');
})

//A port is a sub address on an host
//port, host
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on port 8000')
})


