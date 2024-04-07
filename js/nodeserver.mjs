import { createServer } from 'http';
import { readFile } from 'fs';
import { join, extname } from 'path';

const server = createServer((req, res) => {
  // Set the content type based on the file extension
  const contentType = {
    '.html': 'text/html',
    '.css': 'text/css',
    // Add more content types for other file types if needed
  };

  // Get the file extension
  const ext = extname(req.url);

  // Serve HTML file
  if (ext === '.html') {
    const filePath = join(__dirname, req.url);
    readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading HTML file');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } 
  // Serve CSS file
  else if (ext === '.css') {
    const filePath = join(__dirname, 'css', 'styles.css');
    readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading CSS file');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    });
  } 
  else {
    // Handle other file types or non-existent files
    res.writeHead(404);
    res.end('File not found');
  }
});

// Start the server on localhost (127.0.0.1) without specifying a port
server.listen(80, '127.0.0.1', () => {
  console.log('Server is running at http://127.0.0.1/');
});
