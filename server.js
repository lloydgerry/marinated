const express = require('express');
// const cookieSession = require('cookie-session');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const apiRoutes = require('./src/server/apiRoutes');
// const database = require('./src/server/dbConnection');
const apiRouter = express.Router();
apiRoutes(apiRouter);
app.use('/api', apiRouter);
app.use(serveStatic(__dirname + "/dist"));

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


