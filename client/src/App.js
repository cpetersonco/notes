import React from 'react'
import ButtonAppBar from './components/ButtonAppBar'
import Note from './components/Note'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

function App() {
    return (
        <Box>
            <ButtonAppBar />
            <Container maxWidth='sm'>
                <Note />
            </Container>
        </Box>
    )
}

export default App
