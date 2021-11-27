const Person = require('../models/Person');
const { validateId, messageObj } = require('../utils');

const deletePerson = (req, res, id) => {
  if (validateId(id)) {
    Person.remove(id)
      .then((people) => {
        if (people) {
          res.writeHead(204, { 'Content-type': 'application/json' });
          res.end(JSON.stringify({ remainingPeople: people }));
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

module.exports = { deletePerson };
