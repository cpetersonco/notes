import React from 'react'
import Grid from '@material-ui/core/Grid'
import SavedNotes from './SavedNotes'
import Form from './NoteForm'

const Application = (props) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <Form />
            </Grid>
            <Grid item xs={12} sm={6}>
                <SavedNotes />
            </Grid>
        </Grid>
    )
}

export default Application
