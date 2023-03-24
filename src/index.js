var path = require('path');
const express = require('express')
const { engine } = require('express-handlebars');
const morgan = require('morgan')
const app = express()
const port = 3000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
// app.use(morgan('combined'))



//middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())




app.engine('hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));


//Routes init
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})