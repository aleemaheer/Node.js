const http = require('http');
const path = require("path");
const fs = require("fs");

/*const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
    fs.readFile(path.join(__dirname, 'public', 'home.html'), 
    (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html"});
        res.end(content);

    });

    }
    else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), 
        (err, content) => {
            if (err) throw err;
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(content);
        });
    }
    else if (req.url === '/api/users') {
        const users = [
            { name: "Kevin", age: 30},
            { name: "John", age: 40}
        ];
        res.writeHead(200, { "Content-Type": "application/json"});
        res.end(JSON.stringify(users));
    };
});*/

const server = http.createServer((req, res) => {
    // Build file path
    let file_path = path.join(__dirname, 'public', req.url === '/' ? 'home.html' : req.url);

    // Check extension name
    let extname = path.extname(file_path);

    // Initial content type 
    let content_type = 'index.html';
    switch (extname) {
        case '.js':
            content_type = 'text/javascript';
            break;
        case '.css':
            content_type = 'text/css';
            break;
        case '.html':
            content_type = 'text/html'
            break;
        case '.json':
            content_type = 'application/json'
            break;     
    }
    fs.readFile(file_path, (err, content) => {
        if (err) {
            if (err.code = 'ENOENT') {
                // Page not found
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                    res.writeHead(200, { 'Content-Type': content_type });
                    res.end(content, 'utf8');
                })
            }
            else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        }
        else {
            // Success
            res.writeHead(200, { 'Content-Type': content_type });
            res.end(content, 'utf8');
        }
    })
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server Running on ${PORT}`));