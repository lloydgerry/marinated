

const { Client } = require('pg');
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client
  .connect()
  .catch(error => console.log("db connection error: ", error))

module.exports = client;