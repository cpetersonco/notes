import React from 'react'
// import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
// import Box from '@material-ui/core/Box'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: false
}

const Note = ({ content }) => {
    return (
        <Grid item xs={12}>
            <ReactQuill modules={modules} theme="snow" value={JSON.parse(content)} readOnly={true}/>
        </Grid>
    )
}

export default Note
