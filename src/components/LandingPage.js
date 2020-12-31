import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import NoteIcon from '@material-ui/icons/Note'
import Box from '@material-ui/core/Box'

const LandingPage = ({ history }) => {
    return (
        <div>
            <Container maxWidth="sm">
                <div>
                    <Grid container justify="center">
                        <Grid item>
                            <Box>
                                <NoteIcon color="primary" style={{ fontSize: 100 }}/>
                            </Box>
                        </Grid>
                    </Grid>
                    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                        Notes
                    </Typography>
                    <Typography component="h2" variant="h4" align="center" color="textSecondary" gutterBottom>
                        All your thoughts, in one place.
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
                        Something short and leading about the collection below—its contents, the creator, etc.
                        Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                        entirely.
                    </Typography>
                </div>
            </Container>
        </div>
    )
}

export default LandingPage
