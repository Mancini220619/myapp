//rodando docker com node

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Rodando node com docker!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})