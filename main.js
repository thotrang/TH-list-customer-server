const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    let dataText = '';
    let html = '';
    fs.readFile('text.txt', 'utf-8', (err, str) => {
        dataText = str.split(',');
        for (let i = 0; i < dataText.length; i++) {
            html += `<tr>
            <td>${i+1}</td>
            <td>${dataText[i]}</td>
            <td><button class="btn btn-danger">Delete</button></td>
            <td></td>
        </tr>`
        }
    })


    fs.readFile('index.html', 'utf-8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        data = data.replace('{list-user}', html);
        res.write(data);
        res.end();
    })
}).listen(8080,()=>{
    console.log('localhost8080');
})