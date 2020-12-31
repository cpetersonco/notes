import React from 'react'
import ButtonAppBar from './ButtonAppBar'
import Box from '@material-ui/core/Box'
import SavedNotes from './SavedNotes'
import Form from './NoteForm'
import { auth } from '../api/firebase'
import LandingPage from './LandingPage'

const Home = (props) => {
    return (
        <Box>
            <ButtonAppBar history={props.history} />
            {auth.currentUser
                // User signed in
                ? <div>
                    <Form />
                    <SavedNotes />
                </div>
                // No user is signed in.
                : <LandingPage history={props.history} />
            }
        </Box>
    )
}

export default Home
