import React, { useState, useEffect } from 'react'

import { Grid, Modal, Button, Paper, Container, Typography } from '@material-ui/core'
import makeStyles from '@material-ui/styles/makeStyles'

import NoteForm from './NoteForm'
import Note from './Note'

import { streamNoteItems } from '../../api/firebase'

const useStyles = makeStyles((theme) => ({
    modal: {
        outline: 'none'
    }
}))

const Application = (props) => {
    const classes = useStyles()

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

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="new-note"
                aria-describedby="add-a-new-note"
            >
                <Container maxWidth='sm' className={classes.modal}>
                    <Paper elevation={3}>
                        <NoteForm onSubmit={handleClose}/>
                    </Paper>
                </Container>
            </Modal>
            <Container maxWidth='sm'>
                <Grid justify="space-between" container>
                    <Grid item>
                        <Typography variant="h5" component="h2">Your Notes</Typography>
                    </Grid>
                    <Grid item>
                        <Button size="large" onClick={handleOpen}>New +</Button>
                    </Grid>
                </Grid>
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

        </div>
    )
}

export default Application
