import React from 'react'

import Box from '@material-ui/core/Box'

import LandingPage from './LandingPage'
import Header from './Header'
import Application from '../application'

import { auth } from '../../api/firebase'

const Home = ({ history }) => {
    return (
        <Box>
            <Header history={history} />
            {auth.currentUser
                // User signed in
                ? <Application />
                // No user is signed in.
                : <LandingPage history={history} />
            }
        </Box>
    )
}

export default Home
