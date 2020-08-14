import React from 'react'
import Note from './Note'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const SavedNotes = (props) => {
    return (
        <Container maxWidth='sm'>
            <h1>Saved Notes</h1>
            <Grid container spacing={2}>
                {this.props.savedNotes.map((note, index) => {
                    return <Note key={index} content={note} />
                })}
            </Grid>
        </Container>
    )
}

export default SavedNotes
