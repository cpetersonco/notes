import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

const NoteForm = (props) => {
    const [content, setContentText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        props.onAdd(content)
    };

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
                                shrink: true,
                            }}
                            value={content}
                            onChange={(e) => {
                                setContentText(e.target.value);
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
