
const { pool } = require('./dbConnection');

module.exports = function(router) {

  router.post('/random-recipe', (request, response) => {
    console.log("In the random recipe router")
    pool.connect((error, client, release) => {

    if (error) {console.log(error)}
    
    console.log("request search", request.body.search)
    const search_query = request.body.search
    console.log("query", search_query )

    if (search_query !== undefined ) {

      const dbQuery = `
      SELECT * FROM recipes 
      WHERE search_array @@ plainto_tsquery($1)
      ORDER BY random()
      limit 1
      `;
      const dbParams = [search_query]

      return client.query(dbQuery, dbParams)
        .then(recipes => {
          release()
          console.log("recipes", recipes)
          let url = recipes.rows[0].id
          const thingy = `http://marinated.herokuapp.com/#/recipe/${url}`
          response.json({thingy}) 

        })
        .catch(error => {
          console.error('', error);
        })

    } else {

      const dbQuery = `
        SELECT * FROM recipes 
        ORDER BY random()
        limit 1;
        `;

      return client.query(dbQuery)
        .then(recipes => {
          release()
          let url = recipes.rows[0].id
          const thingy = `http://marinated.herokuapp.com/#/recipe/${url}`
          response.json({thingy}) 

        })
        .catch(error => {
          console.error('', error);
        })
        }
    })
  })

  return router;
};