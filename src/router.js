const { getPeople } = require('./controllers/getPeople');
const { getPerson } = require('./controllers/getPerson');
const { postPerson } = require('./controllers/postPerson');
const { updatePerson } = require('./controllers/updatePerson');
const { deletePerson } = require('./controllers/deletePerson');
const { noResponse } = require('./controllers/noResponse');
const people = require('./models/people');

const router = (req, res) => {
  if (req.method === 'GET' && req.url === '/person') {
    getPeople(req, res);
  } else if (req.method === 'GET' && req.url.match(/\/person\/\w+/)) {
    getPerson(req, res, req.url.split('/')[2]);
  } else if (req.method === 'POST' && req.url === '/person') {
    postPerson(req, res);
  } else if (req.method === 'PUT' && req.url.match(/\/person\/\w+/)) {
    updatePerson(req, res, req.url.split('/')[2]);
  } else if (req.method === 'DELETE' && req.url.match(/\/person\/\w+/)) {
    deletePerson(req, res, req.url.split('/')[2]);
  } else {
    noResponse(req, res);
  }

  // const currentEndpoint = [req.method + req.url] || 'default';
  // currentEndpoint.match();
  // let redirectedFunc = endpoints.match[currentEndpoint];
  // redirectedFunc(req, res);
};

module.exports = { router };
