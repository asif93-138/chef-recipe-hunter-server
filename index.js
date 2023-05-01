const express = require('express')
const cors = require('cors')
const chefs = require('./chef-recipe.json')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Helloooooooo World!!!')
})

app.get('/chefs', (req, res) => {
  res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log('data for id :', id)
    const chef = chefs.find(chef => chef.id === id) || {};
    res.send(chef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})