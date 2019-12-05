
const { pool } = require('./dbConnection');

module.exports = function(router) {

  router.get('/random-recipe', (request, response) => {
    console.log("In the random recipe router")
    pool.connect((error, client, release) => {

    if (error) {console.log(error)}

    const dbQuery = `
      SELECT * FROM recipes 
      ORDER BY random()
      limit 2;
      `;

    return client.query(dbQuery)
      .then(recipes => {
        release()
        let url = recipes.rows[0].id
        const thingy = `http://marinated.herokuapp.com/#/recipe/${url}`
        response.json(thingy) 

      })
      .catch(error => {
        console.error('', error);
      })
    })
  })

  return router;
};