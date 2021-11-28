const { expect } = require('@jest/globals');
const request = require('supertest');
const server = require('./index');
const people = require('./src/models/people');

const mockPerson = {
  name: 'Bob',
  age: 32,
  hobbies: ['books', 'movies'],
};

describe('when requesting to /person with GET method', () => {
  test('should return all objects', async () => {
    const response = await request(server).get('/person');
    expect(response.statusCode).toBe(200);
    expect(response.body).toMatchObject(people);
  });

  test('should return person by id', async () => {
    const newPerson = await request(server).post('/person').send(mockPerson);
    const getNewPerson = await request(server).get(`/person/${newPerson.body.id}`);
    expect(getNewPerson.statusCode).toBe(200);
    expect(getNewPerson.body).toMatchObject(mockPerson);
  });
});

describe('when requesting to /person with POST method', () => {
  test('should create new person obj and return created person obj', async () => {
    const createPersonObj = await request(server).post('/person').send(mockPerson);
    const allPeople = await request(server).get('/person');
    expect(createPersonObj.statusCode).toBe(201);
    expect(allPeople.body.pop()).toMatchObject(mockPerson);
  });
});
