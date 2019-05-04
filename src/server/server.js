import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../components/App';

import apiRouter from '../../api';

const server = express();
server.use(express.static('dist'));
server.use(express.static('public'));

server.use('/api', apiRouter);

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index');
  });

server.listen(4242, () => console.log('Server is running...'));