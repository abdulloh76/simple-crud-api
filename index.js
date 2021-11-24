const { asd } = require('./src/controller');
const fs = require('fs');

const PORT = process.env.PORT || 8080;

const id = Math.random().toString(16).substring(2);

asd();
console.log(`not listening to port ${PORT}`);
