const express = require('express');
const morgan = require('morgan');

const app = express();
const port = 8888;

app.use(morgan('dev'));
app.use('/:id', express.static('client'));

app.listen(port);