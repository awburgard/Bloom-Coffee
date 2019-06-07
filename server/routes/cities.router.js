const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const userCityId = req.user.home_city;
    const queryString = `SELECT * FROM "cities"
                        WHERE "city_id" = $1;`;

    pool.query(queryString, [userCityId])
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