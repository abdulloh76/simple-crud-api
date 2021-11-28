const http = require('http');
const { router } = require('./src/router');

const PORT = process.env.PORT || 8080;

const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

module.exports = server;
