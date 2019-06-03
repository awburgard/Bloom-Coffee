const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- ROUTERS ---------- **/
const users = require('./routes/users.router');



/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/api/users', users)


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on PORT: ', port);
});