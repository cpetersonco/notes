import { genSalt, hash as _hash, compare } from 'bcryptjs'
import User from '../models/Users'
import passport, { serializeUser, deserializeUser, use } from 'passport'
import { Strategy as LocalStrategy } from 'passport-local'

serializeUser((user, done) => {
    done(null, user.id)
})

deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(err, user)
    })
})

// Local Strategy
use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
        // Match User
        User.findOne({ email: email })
            .then((user) => {
                // Create new User
                if (!user) {
                    const newUser = new User({ email, password })
                    // Hash password before saving in database
                    genSalt(10, (err, salt) => {
                        _hash(newUser.password, salt, (err, hash) => {
                            if (err) throw err
                            newUser.password = hash
                            newUser
                                .save()
                                .then((user) => {
                                    return done(null, user)
                                })
                                .catch((err) => {
                                    return done(null, false, { message: err })
                                })
                        })
                    })
                    // Return other user
                } else {
                    // Match password
                    compare(password, user.password, (err, isMatch) => {
                        if (err) throw err

                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, {
                                message: 'Wrong password',
                            })
                        }
                    })
                }
            })
            .catch((err) => {
                return done(null, false, { message: err })
            })
    })
)

export default passport
