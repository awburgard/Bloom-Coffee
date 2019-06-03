const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- ROUTERS ---------- **/
const users = require('./routes/users.router');
const tastingJournal = require('./routes/tastingjournal.router');
const cities = require('./routes/cities.router');
const coffeeShop = require('./routes/coffeeshop.router')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/users', users);
app.use('/api/tasting_journal', tastingJournal);
app.use('/api/cities', cities);
app.use('/api/coffee_shop', coffeeShop);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on PORT: ', port);
});