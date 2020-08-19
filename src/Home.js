import React, { useState, useEffect } from 'react'
import ButtonAppBar from './components/ButtonAppBar'
import Box from '@material-ui/core/Box'
import SavedNotes from './components/SavedNotes'
import Form from './components/NoteForm'
import firebase, { db } from './firebase'

const Home = (props) => {
    const [savedNotes, setSavedNotes] = useState([])

    useEffect(() => {
        if (firebase.auth().currentUser) {
            db.collection('notes').where('uid', '==', firebase.auth().currentUser.uid)
                .get()
                .then(function (querySnapshot) {
                    let initNotes = []
                    querySnapshot.forEach(function (doc) {
                        // doc.data() is never undefined for query doc snapshots
                        initNotes = [...initNotes, doc.data().content]
                    })
                    setSavedNotes(initNotes)
                })
                .catch(function (error) {
                    console.log('Error getting documents: ', error)
                })
        }
    }, [])

    const addNote = (note) => {
        setSavedNotes([note, ...savedNotes])
    }

    return (
        <Box>
            <ButtonAppBar history={props.history} />
            {firebase.auth().currentUser
                // User signed in
                ? <div>
                    <Form onAdd={addNote} />
                    <SavedNotes savedNotes={savedNotes} />
                </div>
                // No user is signed in.
                : <div>Please sign in.</div>
            }
        </Box>
    )
}

export default Home
