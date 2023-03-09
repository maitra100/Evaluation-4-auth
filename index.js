const express = require('express');
const route = require('./src/routes/routes');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/', route);

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});