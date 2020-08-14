import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

class Note extends React.Component {
    render() {
        return (
            <Grid item xs={12}>
                <Paper>
                    <Box pr={2} pb={1}>
                        <Grid item>
                            <TextField
                                id='outlined-textarea'
                                label='Note'
                                style={{ margin: 8 }}
                                multiline
                                fullWidth
                                variant='outlined'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={this.props.content}
                                disabled={true}
                            />
                        </Grid>
                    </Box>
                </Paper>
            </Grid>
        )
    }
}

export default Note
