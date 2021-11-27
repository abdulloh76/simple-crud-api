const Person = require('../models/Person');
const { validatePerson, messageObj } = require('../utils');

const postPerson = async (req, res) => {
  const id = Math.random().toString(16).substring(2);
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const person = JSON.parse(body);
    person.id = id;
    if (validatePerson(person)) {
      Person.add(person)
        .then(() => {
          res.writeHead(201, { 'Content-type': 'application/json' });
          res.end(JSON.stringify(person));
        })
        .catch((e) => {
          res.writeHead(500, { 'Content-type': 'application/json' });
          res.end(JSON.stringify(messageObj(e.message)));
        });
    } else {
      res.writeHead(400, { 'Content-type': 'application/json' });
      res.end(JSON.stringify(messageObj('given person object is invalid')));
    }
  });
};

module.exports = { postPerson };
