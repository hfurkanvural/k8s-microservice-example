const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 8080

app.use(morgan('combined'));

app.get('/', (req, res) => res.send('This is microservice2!'));
app.get('/api/ms2/hello', (req, res) => res.send('Hello from Node Microservice 2!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))