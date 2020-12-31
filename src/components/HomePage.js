import React from 'react'
import ButtonAppBar from './ButtonAppBar'
import Box from '@material-ui/core/Box'
import { auth } from '../api/firebase'
import LandingPage from './LandingPage'
import Application from './Application'

const Home = (props) => {
    return (
        <Box>
            <ButtonAppBar history={props.history} />
            {auth.currentUser
                // User signed in
                ? <Application />
                // No user is signed in.
                : <LandingPage history={props.history} />
            }
        </Box>
    )
}

export default Home
