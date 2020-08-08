import { Router } from 'express'
const router = Router()
import { authenticate } from 'passport'

router.post('/register_login', (req, res, next) => {
    authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(400).json({ errors: err })
        }
        if (!user) {
            return res.status(400).json({ errors: 'No user found' })
        }
        req.logIn(user, (err) => {
            if (err) {
                return res.status(400).json({ errors: err })
            }
            return res.status(200).json({ success: `logged in ${user.id}` })
        })
    })(req, res, next)
})

export default router
