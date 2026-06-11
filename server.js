const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // Route requests to naol-links.html
  let filePath = req.url === '/' ? '/naol-links.html' : req.url;
  filePath = path.join(__dirname, filePath);

  // Default to naol-links.html for any route
  if (path.extname(filePath) === '') {
    filePath = path.join(__dirname, 'naol-links.html');
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      // If file not found, serve the main HTML file
      fs.readFile(path.join(__dirname, 'naol-links.html'), (err, content) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(content, 'utf-8');
      });
    } else {
      // Determine content type
      let contentType = 'text/plain';
      const ext = path.extname(filePath);
      
      if (ext === '.html') contentType = 'text/html; charset=utf-8';
      else if (ext === '.css') contentType = 'text/css';
      else if (ext === '.js') contentType = 'application/javascript';
      else if (ext === '.json') contentType = 'application/json';
      else if (ext === '.svg') contentType = 'image/svg+xml';
      else if (ext === '.png') contentType = 'image/png';
      else if (ext === '.jpg' || ext === '.jpeg') contentType = 'image/jpeg';
      else if (ext === '.gif') contentType = 'image/gif';

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});
