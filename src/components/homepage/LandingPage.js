import React from 'react'

import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const LandingPage = () => {
    return (
        <div>
            <Container maxWidth="sm">
                <div>
                    <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
                        All your thoughts, <br/> in one place.
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
