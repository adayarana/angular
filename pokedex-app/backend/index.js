const chalk = require('chalk');
const cors = require('cors');
const debug = require('debug')('server');
const express = require('express');
const morgan = require('morgan');

require('dotenv').config();

require('./src/config/ddbb.config');

const routes = require('./src/routes/pokedex.routes');

const server = express();
const port = process.env.PORT || 4000;

server.use(cors());
server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.use('/pokedex-app', routes);

server.listen(port, () => debug(`Server is running in ${chalk.blue(`http://localhost:${port}`)}`));