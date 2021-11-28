# simple-crud-api

simple crud api

# how to run server

- **clone the repo**
- rum _npm install_
- launch the server

**two modes for launching**

1. **development**: _npm run start:dev_ (launches with nodemon)
2. **production**: _npm run start:prod_ (webpack builds the project and executes builded code)

## details

1. API path `/person`:
   - **GET** `/person` or `/person/${personId}` should return all persons or person with corresponding `personId`
   - **POST** `/person` is used to create record about new person and store it in database
   - **PUT** `/person/${personId}` is used to update record about existing person
   - **DELETE** `/person/${personId}` is used to delete record about existing person from database
2. Persons are stored as `objects` that have following properties:
   - `id` — unique identifier (`string`, `uuid`) generated on server side
   - `name` — person's name (`string`, **required**)
   - `age` — person's age (`number`, **required**)
   - `hobbies` — person's hobbies (`array` of `strings` or empty `array`, **required**)
