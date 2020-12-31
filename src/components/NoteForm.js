import React, { useState } from 'react'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { createNoteItem } from '../api/firebase'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const EMPTY_DELTA = { ops: [] }

const NoteForm = (props) => {
    const [content, setContent] = useState(EMPTY_DELTA)

    const handleSubmit = (e) => {
        e.preventDefault()

        // skip add if empty
        if (content.ops.length === 0) {
            return
        }

        const contentAsString = JSON.stringify(content)

        createNoteItem(contentAsString)
            .then(function (docRef) {
                console.log('Document written with ID: ', docRef.id)
            })
            .catch(function (error) {
                console.error('Error adding document: ', error)
            })

        setContent(EMPTY_DELTA)
    }

    const onEditorChange = (value, delta, source, editor) => {
        setContent(editor.getContents())
    }

    return (
        <Container maxWidth='sm'>
            <h1>Save a note</h1>
            <ReactQuill placeholder="Your thoughts here..." theme="snow" value={content} onChange={onEditorChange}/>
            <Grid justify="flex-end" container>
                <Grid item>
                    <Button onClick={handleSubmit}>
                    Save
                    </Button>
                </Grid>
            </Grid>

        </Container>
    )
}

export default NoteForm
