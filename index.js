const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT;

app.use('/', (req, res) => {
    res.send('<html><body><h1>Hello World</h1></body></html>')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
