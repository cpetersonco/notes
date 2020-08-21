import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import firebase, { db } from '../firebase'

const NoteForm = (props) => {
    const [content, setContentText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                console.log(firebase.firestore.FieldValue.serverTimestamp())
                db.collection('notes').add({
                    uid: user.uid,
                    content: content,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
                    .then(function (docRef) {
                        console.log('Document written with ID: ', docRef.id)
                    })
                    .catch(function (error) {
                        console.error('Error adding document: ', error)
                    })
                props.onAdd(content)
                setContentText('')
            } else {
                // No user is signed in.
                console.log('Please sign in!')
            }
        })
    }

    return (
        <Container maxWidth='sm'>
            <h1>Save a note</h1>
            <Paper>
                <Box pr={2} pb={1}>
                    <Grid item>
                        <TextField
                            id='outlined-textarea'
                            label='New Note'
                            placeholder='Complete your note...'
                            style={{ margin: 8 }}
                            multiline
                            fullWidth
                            rows={6}
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true
                            }}
                            value={content}
                            onChange={(e) => {
                                setContentText(e.target.value)
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        direction='row'
                        justify='flex-end'
                        alignItems='baseline'>
                        <Button
                            onClick={handleSubmit}
                            variant='contained'>
                            Save
                        </Button>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    )
}

export default NoteForm
