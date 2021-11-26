const express = require('express')
const path = require("path")
const cors = require('cors')
const app = express()
const port = 3000
const apiRouter = require('./handler')
app.use(cors())
app.use(express.static(path.join(__dirname, "../webApp")));

console.log(path.join(__dirname, "../webApp"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../webApp/index.html"));
});

app.use(apiRouter)



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})



