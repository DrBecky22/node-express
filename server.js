
const express = require('express');
const morgan = require('morgan');

const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});


////////////////////////////////////////////
////  old import example 
////////////////////////////////////////////

// const myModule = require('myModule');

in the module it would say:

// module.exports = myFunction;
or named export
// exports.myFunction = myFunction;


////////////////////////////////////////////
////  new import example
////////////////////////////////////////////

import myFunction from 'myModule'; (whole thing)
import { myFunction } from 'myModule'; (named import)

export default myFunction;
or 
export const myFunction = myFunction; (named export)