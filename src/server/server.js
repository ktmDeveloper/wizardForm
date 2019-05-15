import express from 'express';

import apiRouter from '../../api/index';

import config from '../../config';

const server = express();
server.use(express.static('dist'));
server.use(express.static('public'));

server.use('/api', apiRouter);

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
  });

server.listen(config.port, config.host, () => console.log('Server is running...'));