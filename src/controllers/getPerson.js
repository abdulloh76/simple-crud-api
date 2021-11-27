const Person = require('../models/Person');
const { validateId, messageObj } = require('../utils');

const getPerson = async (req, res, id) => {
  if (validateId(id)) {
    Person.findById(id)
      .then((person) => {
        if (person) {
          res.writeHead(200, { 'Content-type': 'application/json' });
          res.end(JSON.stringify(person));
        } else {
          res.writeHead(404, { 'Content-type': 'application/json' });
          res.end(JSON.stringify(messageObj('nothing was found fot this id')));
        }
      })
      .catch((e) => {
        res.writeHead(500, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(messageObj(e.message)));
      });
  } else {
    res.writeHead(400, { 'Content-type': 'application/json' });
    res.end(JSON.stringify(messageObj('id is invalid')));
  }
};

module.exports = { getPerson };
