const multer = require('multer');

const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drive-3beeb-firebase-adminsdk-rt2ks-0fa42b8ebd.json')

const storage = firebaseStorage({
  credentials: firebase.credential.cert(serviceAccount),
  bucketName: 'drive-3beeb.firebasestorage.app', 
  unique: true
})

const upload = multer({
  storage :storage,
})

module.exports = upload;