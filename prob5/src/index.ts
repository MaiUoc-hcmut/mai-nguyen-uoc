const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const route = require('./routes')

import { Express } from "express";

db.connect();

const app: Express = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

route(app);


server.listen(4000, () => {
    console.log('Listening on port 4000');
});

export{}