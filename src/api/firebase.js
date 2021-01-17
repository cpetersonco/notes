import firebase from 'firebase'
const firebaseConfig = {
    apiKey: 'AIzaSyAb7bI5OoZb79CNGOUbNrIc6y57JocbXKA',
    authDomain: 'notes-959f5.firebaseapp.com',
    databaseURL: 'https://notes-959f5.firebaseio.com',
    projectId: 'notes-959f5',
    storageBucket: 'notes-959f5.appspot.com',
    messagingSenderId: '890104586003',
    appId: '1:890104586003:web:02d48879e9cfb5d9aa04e6'
}
firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()

export const authenticateWithEmailAndPassword = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password)
}

export const signUpWithEmailAndPassword = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password)
}

export const signOutUser = () => {
    return auth.signOut()
}

export const createNoteItem = (content) => {
    return db.collection('notes').add({
        uid: auth.currentUser.uid,
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
}

export const updateNoteItem = (content, noteID) => {
    return db.collection('notes').doc(noteID).update({
        content,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
}

export const deleteNoteItem = (noteID) => {
    return db.collection('notes').doc(noteID).delete()
}

export const getNoteItems = () => {
    return db.collection('notes')
        .where('uid', '==', auth.currentUser.uid)
        .orderBy('timestamp', 'desc')
        .get()
}

export const streamNoteItems = (observer) => {
    return db.collection('notes')
        .where('uid', '==', auth.currentUser.uid)
        .orderBy('timestamp', 'desc')
        .onSnapshot(observer)
}

export default firebase
