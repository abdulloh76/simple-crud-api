const validatePerson = (person) =>
  person.name && !isNaN(person.age) && Array.isArray(person.hobbies);

const messageObj = (message) => ({ message });

const uuidRegex = '[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}';

module.exports = { validatePerson, messageObj, uuidRegex };
