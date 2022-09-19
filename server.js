const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const profileRoutes = require('./routes/profile')
const editRoutes = require('./routes/edit')

require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) //pull stuff from forms
app.use(express.json()) //pull stuff from forms 
app.use(logger('dev')) //morgan
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
  
// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash()) //flash when the signup fails

// app.get('/', (rq, res) => {
//   res.render('test2')
// })

app.use('/', mainRoutes)
app.use('/profile', profileRoutes)
app.use('/edit', editRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})


// models-schema
// user:{_id,
//     userName,
//     email,
//     password,
//     profilePic,
//     bio,
//     cardString : 12azef56,12azef57
// }

// cards:{
//     _id,
//     authorId
//     companyName,
//     color,
//     link,
//     logo??,
//     position
// }


// -Create edit profile page in which the form to add a card will be and also up/down arrows to change their position - and also trash button
// -Add edit bio/name

//- Research why text area instead of input is not working file: bio-edit.ejs