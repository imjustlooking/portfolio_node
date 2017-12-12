const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const exphbs = require('express-handlebars')
const path = require('path')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('home')
})

app.listen(port, () => {
  console.log(`App listening on server ${port}`)
})
