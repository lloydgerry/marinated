const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
require('dotenv').config();

app = express();
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(serveStatic(__dirname + "/dist"));
let port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);


