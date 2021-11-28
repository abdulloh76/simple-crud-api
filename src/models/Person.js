const people = require('./people');
const { v4 } = require('uuid');

const findAll = () => new Promise((res, rej) => res(people));

const findById = (id) =>
  new Promise((res, rej) => {
    requestedPerson = people.find((el) => el.id === id);
    if (requestedPerson) res(requestedPerson);
    else throw Error('there is no data with this id');
  });

const add = (person) =>
  new Promise((res, rej) => {
    person.id = v4();
    people.push(person);
    res(person);
  });

const update = (id, updatingInfo) =>
  new Promise((res, rej) => {
    const curPerson = people.find((el) => el.id === id);
    updatingInfo.id = id;
    if (curPerson) res(Object.assign(curPerson, updatingInfo));
    else throw Error('there is no data with this id');
  });

const remove = (id) =>
  new Promise((res, rej) => {
    const curId = people.findIndex((el) => el.id === id);
    people.splice(curId, 1);
    if (curId !== -1) res();
    else throw Error('there is no data with this id');
  });

module.exports = {
  findAll,
  findById,
  add,
  update,
  remove,
};
