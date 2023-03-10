const express = require('express');
const route = require('./src/routes/routes');
require('dotenv').config();
const cors=require('cors');

const app = express();
const port = process.env.PORT;

app.use(cors({
  origin: '*'
}));

app.use(express.json());
app.use('/', route);

app.listen(port, () => {
  console.log(`app listening at port ${port}`);
});