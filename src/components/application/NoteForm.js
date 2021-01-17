import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { Paper, Modal } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    modal: {
        outline: 'none'
    }
}))

const NoteForm = ({ open, setOpen, content, setContent, onSubmit, noteID }) => {
    const classes = useStyles()

    const onEditorChange = (value, delta, source, editor) => {
        setContent(editor.getContents())
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onSubmit(content, noteID)
    }

    return (
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="new-note"
            aria-describedby="add-a-new-note"
        >
            <Container maxWidth='sm' className={classes.modal}>
                <Paper elevation={3}>
                    <Container maxWidth='sm'>
                        <h1>Save a note</h1>
                        <ReactQuill theme="snow" value={content} onChange={onEditorChange}/>
                        <Grid justify="flex-end" container>
                            <Grid item>
                                <Button onClick={handleSubmit}>Save</Button>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </Container>
        </Modal>
    )
}

export default NoteForm
