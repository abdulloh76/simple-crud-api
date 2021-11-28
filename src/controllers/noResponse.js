const { messageObj } = require('../utils');

const noResponse = (req, res) => {
  res.writeHead(404, { 'Content-type': 'application/json' });
  res.end(JSON.stringify(messageObj('not handled endpoint')));
};

module.exports = { noResponse };
