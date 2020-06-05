const express = require('express')
const app = express()
const port = 8080

app.get('/api/ms1/hello', (req, res) => res.send('Hello from Node Microservice 1!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))