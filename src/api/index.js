const express = require('express');
const path = require("path");
const cors = require('cors');
const app = express();
const port = 3000;
const apiRouter = require('./handler');

app.use(cors());

app.use(apiRouter);

app.listen(port, () => {
  console.log(`Backend app listening at http://localhost:${port}`)
});



