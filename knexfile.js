'use strict';

require('dotenv').config();

const connection = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT || 3306),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'bpes_db',
  charset: 'utf8mb4',
};

const pool = {
  min: 0,
  max: 10,
};

module.exports = {
  development: {
    client: 'mysql2',
    connection,
    pool,
  },
  production: {
    client: 'mysql2',
    connection,
    pool,
  },
};
