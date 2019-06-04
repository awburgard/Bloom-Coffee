const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "users"`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
            res.sendStatus(500);
        });
});

router.post('/', (req,res) => {
    const queryString = `INSERT INTO "users" ("username", "password", "first_name", "last_name")
                        VALUES ($1, $2, $3, $4)`;

    pool.query(queryString, [req.body.username, req.body.password, req.body.first_name, req.body.last_name ])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error posting tags to users table: ${err}`);
            res.sendStatus(500);
        });
});


module.exports = router;