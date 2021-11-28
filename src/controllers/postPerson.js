const Person = require('../models/Person');
const { validatePerson, messageObj } = require('../utils');

const postPerson = async (req, res) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    try {
      const person = JSON.parse(body);
      if (validatePerson(person)) {
        Person.add(person).then((newPerson) => {
          res.writeHead(201, { 'Content-type': 'application/json' });
          res.end(JSON.stringify(newPerson));
        });
      } else {
        res.writeHead(400, { 'Content-type': 'application/json' });
        res.end(JSON.stringify(messageObj('given person object is invalid')));
      }
    } catch (e) {
      res.writeHead(500, { 'Content-type': 'application/json' });
      res.end(JSON.stringify(messageObj(e.message)));
    }
  });
};

module.exports = { postPerson };
