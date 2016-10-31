var mongoose = require('mongoose')
var express = require('express')
var layout = require('express-ejs-layouts')
var session = require('express-session')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var flash = require('connect-flash')
var MongoStore = require('connect-mongo')(session)

// db set-up
var dbUrl = 'mongodb://localhost/valid-test'
mongoose.connect(dbUrl)

// app set-up
var app = express()
app.use(morgan('dev'))

// session set-up
app.use(session({
  secret: 'ivhiwehfiwahfiewajfilawejfliawehlifehwalighaew',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    url: dbUrl,
    autoReconnect: true
  })
}))

// form set-up
// app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// view set-up
app.set('view engine', 'ejs')
app.use(layout)

// model set-up
var User = require('./models/user')

// flash set-up
app.use(flash())

// route set-up
var indexRoutes = require('./routes/routes')
app.use('/', indexRoutes)

app.listen(3000)
