const getPeople = (req, res) => {
  try {
    console.log('from getPeople');
    // res.writeHead(200, { 'Content-type': 'application/json' });
    // res.end(JSON.stringify(jsonFile));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getPeople };
