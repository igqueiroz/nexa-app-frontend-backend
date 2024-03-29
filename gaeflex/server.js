const express = require("express");
const bodyParser = require('body-parser')
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, 'build')));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 8080
app.listen(PORT, _ => {
    console.log(`Listening on http://localhost:${PORT}`)
})