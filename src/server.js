const express = require('express');
const app = express();
const routes = require('./routes');

const bodyParser = require('body-parser');
const helmet = require('helmet');
const jwt = require('jsonwebtoken');

app.disable('x-powered-by');
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(routes);

let port;
process.env.PORT ? (port = process.env.PORT) : (port = 3001);

app.listen(port, () => console.log(`Running at ${port} port on server`));
