const people = require('./people');

const findAll = () => new Promise((res, rej) => res(people));

const findById = (id) => new Promise((res, rej) => res(people.find((el) => el.id === id)));

const add = (person) => new Promise((res, rej) => res(people.push(person)));

const update = (person) =>
  new Promise((res, rej) => {
    const curId = people.findIndex((el) => el.id === person.id);
    people.splice(curId, 1, person);
    res(people[curId]);
  });

const remove = (id) =>
  new Promise((res, rej) => {
    const curId = people.findIndex((el) => el.id === id);
    people.splice(curId, 1);
    res(people);
  });

module.exports = {
  findAll,
  findById,
  add,
  update,
  remove,
};
