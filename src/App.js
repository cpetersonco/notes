import React from 'react'
import ButtonAppBar from './components/ButtonAppBar'
import Box from '@material-ui/core/Box'
import SavedNotes from './components/SavedNotes'
import Form from './components/NoteForm'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            savedNotes: [],
        }
        this.addNote = this.addNote.bind(this)
    }

    addNote(note) {
        let notes = this.state.savedNotes
        notes.unshift(note)
        this.setState({ savedNotes: notes })
    }

    render() {
        return (
            <Box>
                <ButtonAppBar />
                <Form onAdd={this.addNote} />
                <SavedNotes savedNotes={this.state.savedNotes} />
            </Box>
        )
    }
}

export default App
