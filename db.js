const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./users.db', err => {
    if (err) throw err;
    console.log('Connected to the database');
});

module.exports = db;