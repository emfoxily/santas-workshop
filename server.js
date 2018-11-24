const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

// psql
const pg = require('pg');

const connectionString = 'postgres://userName:password@serverName/ip:port/nameOfDatabase';
const pgClient = new pg.Client(connectionString);
pgClient.connect();

const app = express();

app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname }/dist/index.html`);
});

const port = process.env.PORT || 8080
app.listen(port)

console.log('Server started on port ' + port) 