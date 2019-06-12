import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAvB31flB9LJe7aGN7Dg0abKVVIP9phGLI",
    authDomain: "chatbox-3e510.firebaseapp.com",
    databaseURL: "https://chatbox-3e510.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base