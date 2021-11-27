const updatePerson = (req, res, id) => {
  try {
    console.log('from updatePerson', `id: ${id}`);
    // res.writeHead(200, { 'Content-type': 'application/json' });
    // res.end(JSON.stringify(jsonFile));
  } catch (error) {
    console.log(error);
  }
};

module.exports = { updatePerson };
