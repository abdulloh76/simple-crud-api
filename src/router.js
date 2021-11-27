const { getPeople } = require('./controllers/getPeople');
const { getPerson } = require('./controllers/getPerson');
const { postPerson } = require('./controllers/postPerson');
const { deletePerson } = require('./controllers/deletePerson');
const { noResponse } = require('./controllers/noResponse');

const router = (req, res) => {
  if (req.method === 'GET' && req.url === '/person') {
    getPeople(req, res);
  } else if (req.method === 'POST' && req.url === '/person') {
    postPerson(req, res);
  } else if (req.method === 'GET' && req.url.match(/\/person\/\w+/)) {
    const id = req.url.split('/')[2];
    getPerson(req, res, id);
  } else if (req.method === 'DELETE' && req.url.match(/\/person\/\w+/)) {
    const id = req.url.split('/')[2];
    deletePerson(req, res, id);
  } else {
    noResponse(req, res);
  }

  // const currentEndpoint = [req.method + req.url] || 'default';
  // currentEndpoint.match();
  // let redirectedFunc = endpoints.match[currentEndpoint];
  // redirectedFunc(req, res);
};

module.exports = { router };
