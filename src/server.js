const path = require('path');
const express = require('express');
const open = require('opn');

const app = express();
const port = process.env.PORT || 8080;
const url = `http://localhost:${port}`;

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

open(url);
app.listen(port);
/* eslint-disable no-console */
console.log(`Opening browser at ${url}`);
console.log(`Listening at ${url}`);
