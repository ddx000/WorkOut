const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const bodyParser = require('body-parser');
require('dotenv/config');


const usersRoute = require('./routes/users');
const actionsRoute = require('./routes/actions');
const recordsRoute = require('./routes/records');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/users',usersRoute)
app.use('/actions',actionsRoute)
app.use('/records',recordsRoute)


app.get('/version', (req, res) => {
  res.send('Hello World! ver0.1')
})

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () =>
 console.log('connected to db')
);


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})