const { getPeople } = require('./controllers/getPeople');
const { getPerson } = require('./controllers/getPerson');
const { postPerson } = require('./controllers/postPerson');
const { updatePerson } = require('./controllers/updatePerson');
const { deletePerson } = require('./controllers/deletePerson');
const { noResponse } = require('./controllers/noResponse');
const { uuidRegex } = require('./utils');

const router = (req, res) => {
  if (req.method === 'GET' && req.url.match(/\/person\/?$/)) {
    getPeople(req, res);
  } else if (req.method === 'GET' && req.url.match(`/person/${uuidRegex}\/?$`)) {
    const splitUrl = req.url.split('/');
    getPerson(req, res, splitUrl[splitUrl.length - 1]);
  } else if (req.method === 'POST' && req.url.match(/\/person\/?$/)) {
    postPerson(req, res);
  } else if (req.method === 'PUT' && req.url.match(`/person/${uuidRegex}\/?$`)) {
    const splitUrl = req.url.split('/');
    updatePerson(req, res, splitUrl[splitUrl.length - 1]);
  } else if (req.method === 'DELETE' && req.url.match(`/person/${uuidRegex}\/?$`)) {
    const splitUrl = req.url.split('/');
    deletePerson(req, res, splitUrl[splitUrl.length - 1]);
  } else {
    noResponse(req, res);
  }
};

module.exports = { router };
