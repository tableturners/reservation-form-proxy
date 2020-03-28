const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();


const app = express();
const PORT = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}.`));

const reservationTarget = 'http://ec2-18-221-246-97.us-east-2.compute.amazonaws.com/';

app.all('/api/restaurants', (req, res) => {
    console.log('redirecting to server 1');
    apiProxy.web(req, res, { target: reservationTarget });
  });

app.all('/api/restaurants/:id', (req, res) => {
    console.log('redirecting to server 1');
    apiProxy.web(req, res, { target: reservationTarget });
});