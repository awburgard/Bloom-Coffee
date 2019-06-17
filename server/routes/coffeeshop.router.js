const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "coffee_shop"
                        ORDER BY "shop_name" ASC;`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
            res.sendStatus(500);
        });
});

router.get('/city/:id', (req, res) => {
    const queryString = `SELECT * FROM "coffee_shop"
                        WHERE "city_id" = $1
                        ORDER BY "shop_name" ASC;`;

    pool.query(queryString, [req.params.id])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
            res.sendStatus(500);
        });
});

module.exports = router;