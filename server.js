const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
require('dotenv').config();

const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cookieSession({
  name: 'session',
  keys: [process.env.cookieString],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

const endpoints = require('./src/server/endpoints')
const endPointsRouter = express.Router();
endpoints(endPointsRouter);
app.use('/endpoints', endPointsRouter);

const apiRoutes = require('./src/server/apiRoutes');
const apiRouter = express.Router();
apiRoutes(apiRouter);
app.use('/api', apiRouter);

app.use(serveStatic(__dirname + "/dist"));




let PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});


