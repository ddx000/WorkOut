const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
require('dotenv/config');


app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () =>
  console.log('connected to db')
);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})