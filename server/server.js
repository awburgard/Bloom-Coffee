require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/sessionmiddleware');
const passport = require('./strategies/user.strategy');

const port = process.env.PORT || 5000;

/** ---------- ROUTERS ---------- **/
const user = require('./routes/user.router');
const tastingJournal = require('./routes/tastingjournal.router');
const cities = require('./routes/cities.router');
const coffeeShop = require('./routes/coffeeshop.router');
const allUsers = require ('./routes/allusers.router')

/** ---------- MIDDLEWARE ---------- **/
// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static('build'));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/** ---------- ROUTES ---------- **/
app.use('/api/user', user);
app.use('/api/tasting_journal', tastingJournal);
app.use('/api/cities', cities);
app.use('/api/coffee_shop', coffeeShop);
app.use('/allusers', allUsers)


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on PORT: ', port);
});