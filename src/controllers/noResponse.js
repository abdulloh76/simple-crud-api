const noResponse = (req, res) => {
  try {
    console.log('from noResponse');
    // res.writeHead(200, { 'Content-type': 'application/json' });
    // res.end(JSON.stringify(jsonFile));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { noResponse };
