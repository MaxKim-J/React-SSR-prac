import express from 'express';
import fs from 'fs';
import path from 'path';
import { renderToString } from 'react-dom/server';
import React from 'react';
import App from './App'
import * as url from 'url';

const app = express();
const html = fs.readFileSync(
  path.resolve(__dirname, '../dist/index.html'),
  'utf-8'
);
app.use('/dist', express.static('dist'));
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.get('*', (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const page = parsedUrl.pathname ? parsedUrl.pathname.substr(1) : 'home';
  const renderString = renderToString(<App page={page} />);
  const initialData = { page };
  const result = html.replace(
    '<div id="root"></div>',
    `<div id="root">${renderString}</div>`)
    .replace('__DATA_FROM_SERVER__', JSON.stringify(initialData));
  // 맨 처음의 요청에 응답, div#root를 대체
  res.send(result)
});
app.listen(3000);