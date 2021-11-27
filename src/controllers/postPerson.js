const postPerson = (req, res) => {
  const id = Math.random().toString(16).substring(2);
  try {
    console.log('from postPerson');
    // res.writeHead(200, { 'Content-type': 'application/json' });
    // res.end(JSON.stringify(jsonFile));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { postPerson };
