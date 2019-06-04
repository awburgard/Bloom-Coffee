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
});

router.put('/', (req, res) => {
    const updatedInfo = req.body;

    const queryText = `UPDATE "tasting_journal"
    SET "coffee_name" = $1,
    "coffee_shop_id" = $2,
    "description" = $3,
    "overall" = $4,
    "aroma" = $5,
    "flavor" = $6,
    "aftertaste" = $7,
    "acidity" = $8,
    "sweetness" = $9,
    "mouthfeel" = $10,
    "balance" = $11,
    "clean_cup" = $12,
    "uniformity" = $13,
    WHERE id= $14;`;

    const queryValues = {
        coffee_name: updatedInfo.coffee_name,
        coffee_shop_id: updatedInfo.coffee_shop_id,
        description: updatedInfo.description,
        overall: updatedInfo.overall,
        aroma: updatedInfo.aroma,
        flavor: updatedInfo.flavor,
        aftertaste: updatedInfo.aftertaste,
        acidity: updatedInfo.acidity,
        sweetness: updatedInfo.sweetness,
        mouthfeel: updatedInfo.mouthfeel,
        balance: updatedInfo.balance,
        clean_cup: updatedInfo.clean_cup,
        uniformity: updatedInfo.uniformity,
        id: updatedInfo.id,
    }

    pool.query(queryText, queryValues)
    .then((response) => {
        res.sendStatus(201);
    })
    .catch((err) => {
        console.log(`Error updating info to tasting journal: ${err}`);
        res.sendStatus(500);
    });
});

module.exports = router;