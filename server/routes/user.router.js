const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
    res.send(req.user);
});

// Handles POST request with new user data
router.post('/register', (req, res, next) => {
    const username = req.body.username;
    const password = encryptLib.encryptPassword(req.body.password);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;

    const queryString = `INSERT INTO "users" ("username", "password", "first_name", "last_name")
                        VALUES ($1, $2, $3, $4) RETURNING "user_id";`;
    pool.query(queryString, [username, password, first_name, last_name])
    .then((response) => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.log(`Error creating user: ${err}`);
        res.sendStatus(500);
    });
});

// Handles login form authenticate/login POST
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
    res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
    req.logout();
    res.sendStatus(200);
});

module.exports = router;
