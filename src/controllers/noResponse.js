const { messageObj, requestHandlerWrapper } = require('../utils');

const noResponse = requestHandlerWrapper((req, res) => {
  res.writeHead(404, { 'Content-type': 'application/json' });
  res.end(JSON.stringify(messageObj('not handled endpoint')));
});

module.exports = { noResponse };
