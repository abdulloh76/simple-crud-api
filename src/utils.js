const validatePerson = (person) =>
  person.name && !isNaN(person.age) && Array.isArray(person.hobbies);

const messageObj = (message) => ({ message });

module.exports = { validatePerson, messageObj };
