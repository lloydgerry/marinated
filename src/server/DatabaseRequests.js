const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

const getRecipes = () => {
  return client.query(`SELECT * FROM recipes;`)
    .then(data => {
      console.log(data.rows)
      client.end()
      return data.rows;

    })
    .catch((err) => { console.log("caught an error in collecting recipes:", err) });
};

module.exports = { getRecipes }