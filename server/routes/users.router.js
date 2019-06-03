const express = require('./node_modules/express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req,res)=>{
    const queryString = `SELECT * "users";`;

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