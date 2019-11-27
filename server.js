const express = require('express');
// const path = require('path');
const serveStatic = require('serve-static');
// const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
// const api = require('./api')
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const apiRoutes = require('./src/server/apiRoutes');
const database = require('./src/server/dbConnection');
const apiRouter = express.Router();
apiRoutes(apiRouter, database)
app.use('/api', apiRouter);



app.use(serveStatic(__dirname + "/dist"));
let port = process.env.PORT || 5000;
app.listen(port);
console.log('server started '+ port);


