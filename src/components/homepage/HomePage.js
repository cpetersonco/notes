import React, { useState } from 'react'

import Box from '@material-ui/core/Box'

import LandingPage from './LandingPage'
import Header from './Header'
import Application from '../application'

import firebase from 'firebase/app'
import 'firebase/auth'

const Home = ({ history }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    firebase.auth().onAuthStateChanged(function (user) {
        setIsLoading(false)
        if (user) {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    })

    if (!isLoading) {
        return (
            <Box>
                <Header history={history} />
                {isAuth ? <Application /> : <LandingPage history={history} />}
            </Box>
        )
    } else {
        return (<div> </div>)
    }
}

export default Home
