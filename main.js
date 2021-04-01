const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.setHeader('Content-Type', 'text/html');
  let pathFile = './assets/index.html'
  switch (req.url) {
    case '/':
      pathFile = "./assets/index.html"
      break;
    case '/about':
      pathFile = "./assets/about.html"
      break;
    case '/contact':
      pathFile = "./assets/contact.html"
      break;
    case '/faq':
      pathFile = "./assets/faq.html"
      break;
  }
  console.log(pathFile);
  fs.readFile(pathFile, (err, file) => {
    if (err) {
      console.log(err);
    } else {
      res.end(file)
    }
  })
})

server.listen(3010)
