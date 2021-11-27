const validateId = (id) => id.match(/\w+/) && id.length > 10;

const validatePerson = (person) =>
  person.id && person.name && !isNaN(person.age) && Array.isArray(person.hobbies);

const messageObj = (message) => ({ message });

module.exports = { validateId, validatePerson, messageObj };
