/* jshint esversion:6 */
const pgp = require('pg-promise')();
const db = pgp('postgres://buy_write:password@localhost:5432/art_prod');

module.exports = db;
