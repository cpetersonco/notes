import React from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const modules = {
    toolbar: false
}

const Note = ({ content }) => {
    return (
        <ReactQuill modules={modules} theme="snow" value={JSON.parse(content)} readOnly={true}/>
    )
}

export default Note
