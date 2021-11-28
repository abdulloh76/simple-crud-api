const Person = require('../models/Person');
const { messageObj } = require('../utils');
const { validate } = require('uuid');

const deletePerson = (req, res, id) => {
  if (validate(id)) {
    Person.remove(id)
      .then(() => {
        res.writeHead(204, { 'Content-type': 'application/json' });
      })
      .catch((e) => {
        res.writeHead(404, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(messageObj(e.message)));
      });
  } else {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(messageObj('id is invalid')));
  }
};

module.exports = { deletePerson };
