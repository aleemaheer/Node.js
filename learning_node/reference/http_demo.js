const http = require('http');

// Create server object
http.createServer((req, res) => {
    // Write response
    res.write("<h1>Welcome to Node.js</h1>");
    res.end();
}).listen(5000, () => console.log("Server is running on localhost5000"));