const Firebase = require('firebase-admin')

const serviceAccount = require('../drive-3beeb-firebase-adminsdk-rt2ks-0fa42b8ebd.json')


const firebase = Firebase.initializeApp({
  credential: Firebase.credential.cert(serviceAccount),
  storageBucket: 'drive-3beeb.firebasestorage.app'
})

module.exports = Firebase;