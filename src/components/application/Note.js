import { Paper, Button, Grid } from '@material-ui/core'

import React from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: false
}

const Note = ({ content, openNoteEditor, noteId }) => {
    return (
        <Paper elevation={3} square={true}>
            <ReactQuill modules={modules} theme="snow" value={content} readOnly={true}/>
            <Grid justify="space-between" container>
                <Grid item>
                    <Button onClick={() => openNoteEditor(content, noteId, true)}>Edit</Button>
                </Grid>
                <Grid item>
                    <Button>Delete</Button>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Note
