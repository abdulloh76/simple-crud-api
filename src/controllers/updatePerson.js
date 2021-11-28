const Person = require('../models/Person');
const { validateId, messageObj } = require('../utils');

const updatePerson = (req, res, id) => {
  let body = '';

  req.on('data', (chunk) => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const updatingInfo = JSON.parse(body);
    if (validateId(id)) {
      Person.update(id, updatingInfo)
        .then((updatedPerson) => {
          res.writeHead(200, { 'Content-type': 'application/json' });
          res.end(JSON.stringify(updatedPerson));
        })
        .catch((e) => {
          res.writeHead(404, { 'Content-type': 'application/json' });
          res.end(JSON.stringify(messageObj(e.message)));
        });
    } else {
      res.writeHead(400, { 'Content-type': 'application/json' });
      res.end(JSON.stringify(messageObj('id is invalid')));
    }
  });
};

module.exports = { updatePerson };
