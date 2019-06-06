const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/kansas_city', (req, res) => {
    const queryString = `SELECT * FROM "cities"
                        WHERE "city_name" = "Kansas City;`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
            res.sendStatus(500);
        });
});

router.get('/zip/', (req, res) => {
    const queryString = `SELECT "zipcode" FROM "cities";`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
            res.sendStatus(500);
        });
});

module.exports = router;