

const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

module.exports = { pool }