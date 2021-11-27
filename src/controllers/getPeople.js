const Person = require('../models/Person');
const { messageObj } = require('../utils');

const getPeople = async (req, res) => {
  Person.findAll()
    .then((people) => {
      res.writeHead(200, { 'Content-type': 'application/json' });
      res.end(JSON.stringify(people));
    })
    .catch((e) => {
      res.writeHead(500, { 'Content-type': 'application/json' });
      res.end(JSON.stringify(messageObj(e.message)));
    });
};

module.exports = { getPeople };
