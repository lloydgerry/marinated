const { Client } = require('pg');
const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
require('dotenv').config();

app = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(serveStatic(__dirname + "/dist"));
let port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);


const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: process.env.DB_PASS,
//   port: process.env.DB_PORT,
// })

const getRecipes = function() {
  return client.query(`SELECT * FROM recipes;`)
    .then(data => {
      console.log(data.rows)
      return data.rows;
    })
    .catch((err) => { console.log("caught an error in collecting recipes:", err) });
};

console.log(getRecipes())