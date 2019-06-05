const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "users";`
    pool.query(queryString)
        .then((results) => {
            res.send(results.rows)
        })
        .catch((err) => {
            console.log(`Error getting data from users table: ${err}`)
        })
});

module.exports = router;