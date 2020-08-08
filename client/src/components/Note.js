import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

export default function Note() {
    return (
        <Grid container spacing={2}>
            <Paper m='3'>
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
                />
            </Paper>
            <Grid
                container
                direction='row'
                justify='flex-end'
                alignItems='baseline'>
                <Button variant='contained'>Enter</Button>
            </Grid>
        </Grid>
    )
}
