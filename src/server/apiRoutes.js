

module.exports = function(router, database) {

  router.get('/recipes', (request, response) => {
    return database.query(`SELECT * FROM recipes;`)
      .then(data => {
        console.log(data.rows);
        // database.end()
        return data.rows;
      })
      .then(recipes => response.send(recipes))
      .catch(e => {
        console.error('Error in apiRoutes: ', e);
        response.send(e);
      });
  });

  return router;
}




// app.get('/api/home', (request, response) => {
//   console.log('I am in the console')
//   response.send('hello there')
// })

// app.get('/api/recipes', (request, response) => {

// })