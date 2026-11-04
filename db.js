'use strict';

const knex = require('knex');
const knexConfig = require('./knexfile');

const environment = process.env.NODE_ENV || 'development';

if (!knexConfig[environment]) {
  throw new Error(`Unknown database environment: ${environment}`);
}

module.exports = knex(knexConfig[environment]);
