import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        flexGrow: 1,
    },
}))

export default function Note() {
    const classes = useStyles()

    return (
        <Grid container className={classes.root}>
            <Paper className={classes.paper}>
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
                    />
                </Grid>
                <Grid
                    item
                    container
                    direction='row'
                    justify='flex-end'
                    alignItems='baseline'>
                    <Button variant='contained'>Enter</Button>
                </Grid>
            </Paper>
        </Grid>
    )
}
