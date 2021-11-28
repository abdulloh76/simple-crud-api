const validatePerson = (person) =>
  person.name && !isNaN(person.age) && Array.isArray(person.hobbies);

const messageObj = (message) => ({ message });

const uuidRegex = '[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}';

const requestHandlerWrapper = (requestHandler) => {
  return (req, res, id) => {
    try {
      requestHandler(req, res, id);
    } catch (e) {
      res.writeHead(500, { 'Content-type': 'application/json' });
      res.end(JSON.stringify(messageObj(e.message)));
    }
  };
};

module.exports = { validatePerson, messageObj, uuidRegex, requestHandlerWrapper };
