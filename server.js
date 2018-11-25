const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const path = require('path');

// psql
const PG = require('pg');

// const config = process.env.HEROKU_DATABASE_URL;

const conString = process.env.HEROKU_DATABASE_URL;
const pool = new PG.Pool(conString);

// if (process.env.HEROKU_DATABASE_URL) {
//   PG.defaults.ssl = true;
// }

app.get('/elves', (req, res) => {
  pool.connect((err, client, done) => {
    if(err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('SELECT * FROM elves', (err, result) => {
      if(err) {
        return console.error('error running query', err);
      }
      res.json(result.rows);
      console.log(result.rows);
      done();
    });
  });
});

app.use('/', serveStatic(path.join(__dirname, '/dist')));

app.get('*', (req, res) => {
  res.sendFile(`${__dirname }/dist/index.html`);
});

const port = 5000
app.listen(port)

console.log('Server started on port ' + port) 