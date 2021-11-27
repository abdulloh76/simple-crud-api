const people = require('./people');

const findAll = () => new Promise((res, rej) => res(people));

const findById = (id) => new Promise((res, rej) => res(people.find((el) => el.id === id)));

const add = (person) => new Promise((res, rej) => res(people.push(person)));

const update = (person) =>
  new Promise((res, rej) => {
    const curId = people.find((el) => el.id === person.id);
    res(people.splice(curId - 1, curId, person));
  });

const remove = (id) => new Promise((res, rej) => res(people.filter((el) => el.id !== id)));

module.exports = {
  findAll,
  findById,
  add,
  update,
  remove,
};
