require('newrelic');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const proxy = require('http-proxy-middleware');

const app = express();
const port = 8888;

app.use(morgan('dev'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/:houseId', express.static(path.join(__dirname, '/../client')));

app.use('/api/houses', proxy({target: 'http://ec2-13-57-193-116.us-west-1.compute.amazonaws.com', changeOrigin : true}));

app.use('/api/agents', proxy({target: 'http://ec2-13-57-193-116.us-west-1.compute.amazonaws.com', changeOrigin : true}));

app.use('/api/properties', proxy({target: 'http://ec2-52-53-224-119.us-west-1.compute.amazonaws.com', changeOrigin: true}));

app.listen(port, () => {
  console.log(`Hidey-Ho Cap'n, we are now serving on port ${port}!`);
});
