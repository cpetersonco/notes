import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'

class Form extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            content: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.onAdd(this.state.content)
    }

    handleChange(event) {
        this.setState({
            content: event.target.value,
        })
    }

    render() {
        return (
            <Container maxWidth='sm'>
                <h1>Save a Note</h1>
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
                                value={this.state.content}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid
                            item
                            container
                            direction='row'
                            justify='flex-end'
                            alignItems='baseline'>
                            <Button
                                onClick={this.handleSubmit}
                                variant='contained'>
                                Save
                            </Button>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        )
    }
}

export default Form
