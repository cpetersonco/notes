import createError from 'http-errors'
import express, { json, urlencoded, static } from 'express'
import session from 'express-session'
import { join } from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
const MongoStore = require('connect-mongo')(session)
import { connect, connection } from 'mongoose'

import indexRouter from './routes/index'
import usersRouter from './routes/users'
import testAPIRouter from './routes/testAPI'
import passport from './passport/setup'
import auth from './routes/auth'

const app = express()
const MONGO_URI = 'mongodb://127.0.0.1:27017/tutorial_social_login'

connect(MONGO_URI, { useNewUrlParser: true })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch((err) => console.log(err))

// view engine setup
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jade')

// Bodyparser middleware, extended false does not allow nested payloads
app.use(cors())
app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())
app.use(static(join(__dirname, 'public')))

// Express Session
app.use(
    session({
        secret: 'very secret this is',
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: connection }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/testAPI', testAPIRouter)
app.use('/api/auth', auth)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

export default app
