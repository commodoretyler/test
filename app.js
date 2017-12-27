const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const HID = require('node-hid');

const app = express();
const server = app.listen(port, function () {
  console.log('Server running at http://127.0.0.1:' + port + '/');
});

const devices = HID.devices();

app.get('/', function(req, res) {
  res.send(...devices);
});


