import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

const Note = ({ content }) => {
    return (
        <Grid item xs={12}>
            <Paper>
                <Box pr={2} pb={1}>
                    <Grid item>
                        <TextField
                            id='outlined-textarea'
                            label='Note'
                            style={{ margin: 8, color: 'primary' }}
                            multiline
                            fullWidth
                            variant='outlined'
                            InputLabelProps={{
                                shrink: true
                            }}
                            inputProps={{
                                readOnly: true,
                                disabled: true
                            }}
                            value={content}
                            color='primary'
                        />
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}

export default Note
