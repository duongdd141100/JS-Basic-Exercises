'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "Doducduong14",
  database: process.env.DB_NAME || "nodejs_api"
});
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
module.exports = db