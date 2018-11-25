const express = require('express');
const app = express();
const serveStatic = require('serve-static');
const path = require('path');

// psql
const PG = require('pg');

// const config = process.env.HEROKU_DATABASE_URL;

const conString = process.env.DATABASE || "postgres://kxupumqbmxtyiz:dd8a8b209dc6e399468e7129761b3011c2d410cc9ccf8c9721235a090d1af510@ec2-54-163-230-178.compute-1.amazonaws.com:5432/dcd5ljlkt0j6od";
const pool = new PG.Pool(conString);

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

const port = process.env.PORT || 8080
app.listen(port)

console.log('Server started on port ' + port) 