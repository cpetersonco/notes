import React, { useState } from 'react'
import ButtonAppBar from './components/ButtonAppBar'
import Box from '@material-ui/core/Box'
import SavedNotes from './components/SavedNotes'
import Form from './components/NoteForm'

const App = (props) => {
    const [savedNotes, setSavedNotes] = useState([])

    const addNote = (note) => {
        setSavedNotes([note, ...savedNotes])
    }

    return (
        <Box>
            <ButtonAppBar />
            <Form onAdd={addNote} />
            <SavedNotes savedNotes={savedNotes} />
        </Box>
    )
}

export default App
