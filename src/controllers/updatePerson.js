const Person = require('../models/Person');
const { validatePerson, validateId, messageObj } = require('../utils');

const updatePerson = (req, res, id) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const person = JSON.parse(body);
    person.id = id;
    if (validateId(id)) {
      if (validatePerson(person)) {
        Person.update(person)
          .then((person) => {
            if (person) {
              res.writeHead(200, { 'Content-type': 'application/json' });
              res.end(JSON.stringify(person));
            } else {
              res.writeHead(404, { 'Content-type': 'application/json' });
              res.end(JSON.stringify(messageObj('nothing was found for this id')));
            }
          })
          .catch((e) => {
            res.writeHead(500, { 'Content-type': 'application/json' });
            res.end(JSON.stringify(messageObj(e.message)));
          });
      } else {
        res.writeHead(400, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(messageObj('given person object is invalid')));
      }
    } else {
      res.writeHead(400, { 'Content-type': 'application/json' });
      res.end(JSON.stringify(messageObj('id is invalid')));
    }
  });
};

module.exports = { updatePerson };
