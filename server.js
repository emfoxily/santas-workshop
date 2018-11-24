const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

// create the express app
const app = express();

// create middleware to handle the serving the app
app.use('/', serveStatic(path.join(__dirname, '/dist')));

// Catch all routes and redirect to the index file
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
});

// const http = require('http');
const { Client } = require('pg');

// Create default port to serve the app on
const PORT = process.env.PORT || 8080;
const { DATABASE_URL } = process.env;

// const server = http.createServer((req, res) => {
//   const client = new Client({
//     connectionString: DATABASE_URL,
//   });
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   client.connect()
//     .then(() => client.query('SELECT * FROM elves'))
//     .then((result) => {
//       res.end(`${result.rows[0].elf_name}\n`);
//       client.end();
//     })
//     .catch(() => {
//       res.end('ERROR');
//       client.end();
//     });
// });

// server.listen(PORT, () => {
//   // eslint-disable-next-line
//   console.log(`Server running on ${PORT}/`); 
// });

// psql
const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT * FROM elves;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

// Log to feedback that this is actually running
console.log(`Server started on port ${PORT}`);
