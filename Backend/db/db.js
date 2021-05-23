const knex = require("knex");
const knexfile = require("./knexfile");

// in prod don't access knexfile.development directly
const db = knex(knexfile.development);
module.exports = db;
