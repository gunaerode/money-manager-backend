const http = require('http');
const app = require('./app');

const PORT = process.env.PORT || 4000;

// Express passed into createserver to use socket connection
const server = http.createServer(app);

//PORT connect
server.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});
