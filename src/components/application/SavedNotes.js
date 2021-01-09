import React, { useState, useEffect } from 'react'

import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import Note from './Note'

import { streamNoteItems } from '../../api/firebase'

const SavedNotes = (props) => {
    const [savedNotes, setSavedNotes] = useState([])

    useEffect(() => {
        const unsubscribe = streamNoteItems({
            next: querySnapshot => {
                const updatedNoteItems = querySnapshot.docs.map(docSnapshot => docSnapshot.data())
                setSavedNotes(updatedNoteItems)
            },
            error: () => console.log('Get note item failed.')
        })
        return () => unsubscribe() // unsubscribing from the listener when the component is unmounting.
    }, [])

    return (
        <Container maxWidth='sm'>
            <h1>Saved Notes</h1>
            <Grid container spacing={2}>
                {savedNotes.map((note, index) => {
                    return (
                        <Grid item xs={12} key={index}>
                            <Note content={note.content} />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )
}

export default SavedNotes
