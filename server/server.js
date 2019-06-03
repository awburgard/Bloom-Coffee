const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/



/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on PORT: ', port);
});