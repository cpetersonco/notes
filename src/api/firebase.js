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

export default firebase
