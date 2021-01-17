import React, { useState, useEffect } from 'react'

import { Grid, Button, Container, Typography } from '@material-ui/core'

import NoteForm from './NoteForm'
import Note from './Note'

import { streamNoteItems, createNoteItem, updateNoteItem, deleteNoteItem } from '../../api/firebase'

const EMPTY_DELTA = { ops: [] }

const Application = (props) => {
    const [savedNotes, setSavedNotes] = useState([])

    useEffect(() => {
        const unsubscribe = streamNoteItems({
            next: querySnapshot => {
                const updatedNoteItems = querySnapshot.docs.map(docSnapshot => {
                    return { id: docSnapshot.id, ...docSnapshot.data() }
                })
                setSavedNotes(updatedNoteItems)
            },
            error: () => console.log('Get note item failed.')
        })
        return () => unsubscribe() // unsubscribing from the listener when the component is unmounting.
    }, [])

    // save a new note
    const createNote = (content, noteID) => {
        const contentAsString = JSON.stringify(content)

        createNoteItem(contentAsString)
            .catch(function (error) {
                console.error('Error adding document: ', error)
            })

        setOpen(false)
    }

    // update a note
    const updateNote = (content, noteId) => {
        const contentAsString = JSON.stringify(content)

        updateNoteItem(contentAsString, noteId)
            .catch(function (error) {
                console.error('Error adding document: ', error)
            })

        setOpen(false)
    }

    const deleteNote = (noteId) => {
        deleteNoteItem(noteId)
            .catch((error) => {
                console.error('Error deleting document: ', error)
            })
    }

    // Modal State
    const [isEdit, setIsEdit] = useState(false)

    const [open, setOpen] = useState(false)

    const [content, setContent] = useState(EMPTY_DELTA)

    const [noteID, setNoteID] = useState('')

    const openNoteEditor = (initialContent, noteId, isEdit) => {
        setOpen(true)
        setContent(initialContent)
        setNoteID(noteId)
        setIsEdit(isEdit)
    }

    return (
        <div>
            <NoteForm noteID={noteID} content={content} setContent={setContent} open={open} setOpen={setOpen} onSubmit={isEdit ? updateNote : createNote}/>
            <Container maxWidth='sm'>
                <Grid justify="space-between" container>
                    <Grid item>
                        <Typography variant="h5" component="h2">Your Notes</Typography>
                    </Grid>
                    <Grid item>
                        <Button size="large" onClick={() => { openNoteEditor(EMPTY_DELTA, '', false) }}>New +</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {savedNotes.map((note, index) => {
                        const contentAsJSON = JSON.parse(note.content)
                        return (
                            <Grid item xs={12} key={index}>
                                <Note content={contentAsJSON} openNoteEditor={openNoteEditor} noteId={note.id} onDelete={deleteNote}/>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>

        </div>
    )
}

export default Application
