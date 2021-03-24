const { Pool } = require("pg");

const pool = new Pool()
// You can add additionl options here to specify host, password, etc. It will default to the standard pg localhost port.

module.exports = pool