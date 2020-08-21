import React, { useState, useEffect } from 'react'
import ButtonAppBar from './ButtonAppBar'
import Box from '@material-ui/core/Box'
import SavedNotes from './SavedNotes'
import Form from './NoteForm'
import firebase, { db } from '../api/firebase'
import LandingPage from './LandingPage'

const Home = (props) => {
    const [savedNotes, setSavedNotes] = useState([])

    useEffect(() => {
        if (firebase.auth().currentUser) {
            db.collection('notes').where('uid', '==', firebase.auth().currentUser.uid).orderBy('timestamp', 'desc')
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
                : <LandingPage history={props.history} />
            }
        </Box>
    )
}

export default Home
