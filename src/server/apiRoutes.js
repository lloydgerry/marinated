const { scraperRouter } = require('./scraperRouter');
const { pool } = require('./dbConnection');

module.exports = function(router) {


  router.get('/recipes', (request, response) => {
    pool.connect((error, client, release) => {

      if (error) {console.log(error)}

    return client.query(`SELECT * FROM recipes;`)
      .then(recipes => {
        release()
        response.send(recipes.rows) 
      })
      .catch(error => {
        console.error('Error in apiRoutes recipes: ', error);
      })
    })
  });

  router.post('/scraper', (request, response) => {
    pool.connect((error, client, release) => {
      if (error) {console.log(error)}
      let queryResult = ""
      const dbQuery = `SELECT * FROM recipes WHERE source_url = $1;`;
      const dbParams = [request.body.url];

      console.log("recipes scraper body", request.body.url)

      return client.query(dbQuery, dbParams)
        .then(response => {
          queryResult = response
          console.log("query result", queryResult)
          release()
        })
        .then( () => {
          if (queryResult.rowCount !== 0) {
            console.log("yay this exists")
            return { exists: false };
            } else {
              scraperRouter(dbParams[0])
                .then(recipe => { 
                  console.log("data from scraper in router:", recipe)
                  response.send(recipe)
                })
            }
          })
        .catch(error => console.log("error in dbquery for new-recipe", error));

    })
  })

  router.post('/recipes-new', (request, response) => {
    pool.connect((error, client, release) => {
      if (error) {console.log(error)};

      const dbQuery = `
        INSERT INTO recipes (title, image_url, summary, ingredients, preparation, author, source_url, prep_time, servings)
        VAlUES
        ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `;
      const data = request.body.recipe;
      const dbParams = [data.title, data.image_url, data.summary, data.ingredients, data.preparation, data.author, data.source_url, data.prep_time, data.servings];

      return client.query(dbQuery,dbParams)
        .then(res => {
          release()
          response.send(res) 
        })
        .catch(error => {
          console.error('Error from inserting recipe: ', error);
        });
    })
  });

  router.get('/recipes/:id', (request, response) => {
    pool.connect((error, client, release) => {
      if (error) {console.log(error)};

      const dbQuery = `SELECT * FROM recipes WHERE id = $1;`;
      const dbParams = [request.params.id];
      return client.query(dbQuery, dbParams)
        .then(data => {
          release();
          response.send(data.rows);
        })
        .catch(e => {
          console.error('Error in apiRoutes recipes id: ', e);
          response.send(e);
        });
    });
  });

  router.get('/user/:id', (request, response) => {
    const dbQuery = `
      SELECT * 
      FROM user_recipes
      JOIN recipes ON recipes.id = recipe_id
      WHERE user_id is $1;
    `;
    const dbParams = [request.body.id];
    return database.query(dbQuery, dbParams)
      .then(data => response.send(data.rows))
      .catch(e => {
        console.error('Error in apiRoutes: ', e);
        response.send(e);
      });
  });

  router.get('/user/:id/mealplan', (request, response) => {
    const dbQuery = `
      SELECT * 
      FROM plan_recipes
      JOIN meal_plans ON meal_plan.id = meal_plans_id
      JOIN recipes ON recipes.id = recipe_id
      WHERE user_id is $1;
    `;
    const dbParams = [request.body.id];
    return database.query(dbQuery, dbParams)
      .then(data => response.send(data.rows))
      .catch(e => {
        console.error('Error in apiRoutes mealplan: ', e);
        response.send(e);
      });
  });

  

  return router;
};
// router.post('/recipes-new', (request, response) => {
//   pool.connect((error, client, release) => {

//     if (error) {console.log(error)}

//     const dbQuery = ``;
//     const dbParams = [request.body.!!!!!!];

//   return client.query(dbQuery,dbParams)
//     .then(recipes => {
//       release()
//       response.send() 
//     })
//     .catch(error => {
//       console.error('', error);
//     })
//   })
// })