const express = require('express')
const app = express()
const port = 3000

app.get('/', (require, response) => {
    response.send('<h1>Full Cycle</h1>')
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})