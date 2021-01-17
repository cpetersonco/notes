import React, { useState } from 'react'

import Box from '@material-ui/core/Box'

import LandingPage from './LandingPage'
import Header from './Header'
import Application from '../application'

import { auth } from 'firebase'

const Home = ({ history }) => {
    const [isAuth, setIsAuth] = useState(false)

    auth().onAuthStateChanged(function (user) {
        if (user) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    })

    return (
        <Box>
            <Header history={history} />
            {isAuth ? <Application /> : <LandingPage history={history} />}
        </Box>
    )
}

export default Home
