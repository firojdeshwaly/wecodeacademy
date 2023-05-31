### 1. What is Node.js?
## 
```
. Node.js is an open-source, server-side JavaScript runtime environment that allows developers to build scalable and high-performance applications. It uses an event-driven, non-blocking I/O model, making it lightweight and efficient for handling concurrent requests.

const http = require('http');
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});
```