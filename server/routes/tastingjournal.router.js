const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    const queryString = `SELECT * FROM "users"
                        JOIN "tasting_journal" ON "users"."user_id" = "tasting_journal"."user_id"
                        JOIN "coffee_shop" ON "tasting_journal"."coffee_shop_id" = "coffee_shop"."coffee_shop_id";`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log(`Err: ${err}`);
            res.sendStatus(500);
        });
});

router.post('/', (req, res) => {
    const queryString = `INSERT INTO "tasting_journal" ("coffee_name", "coffee_shop_id", "user_id", "description", "overall",
                                                        "date", "aroma", "flavor", "aftertaste", "acidity", "sweetness",
                                                        "mouthfeel", "balance", "clean_cup", "uniformity"),
                        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)`;

    console.log(req.body.coffee_shop_id);

    pool.query(queryString, [req.body.coffee_name, req.body.coffee_shop_id, req.body.user_id, req.body.description,
                            req.body.overall, req.body.date, req.body.aroma, req.body.flavor, req.body.aftertaste,
                            req.body.acidity, req.body.sweetness, req.body.mouthfeel, req.body.balance,
                            req.body.clean_cup, req.body.uniformity])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            console.log(`Error posting tags to users table: ${err}`);
            res.sendStatus(500);
        });
})

module.exports = router;