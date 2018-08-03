var express = require('express');
var proxy = require('http-proxy-middleware');
var fallback = require('express-history-api-fallback');
var path = require('path');

var applicationPort = 8080;

var app = express();

app.use(express.static('public'));

app.use('/api', proxy({target: 'http://localhost:8081/', changeOrigin: true}));
app.use(fallback(path.join(__dirname, '../public/index.html')));

app.listen(applicationPort, function () {
  console.log(`Test working on port ${applicationPort}`);
});
