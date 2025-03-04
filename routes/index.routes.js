const express = require('express');
const authMiddleware = require('../middlewares/authe')

const router = express.Router();
const upload = require('../config/multer.config')
const fileModel = require('../models/files.models')
const firebase = require('../config/firebase.config')

router.get('/home',authMiddleware,async (req, res) => {

  const userFiles = await fileModel.find({
    user: req.user.userId
  })

  console.log(userFiles)

  res.render('home',{
    files: userFiles
  })
})

router.post('/upload',authMiddleware , upload.single('file'),async (req, res) => {
  const newFile = await fileModel.create({
    originalname: req.file.originalname,
    path: req.file.path,
    user: req.user.userId
  })

  res.json(newFile);
})

router.get('/download/:path',authMiddleware,async (req,res) => {

  const loggedinUserId = req.user.userId;
  const path = req.params.path;

  const file = await fileModel.findOne({
    path: path,
    user: loggedinUserId
  })

  if (!file) {
    return res.status(401).json({ 
      message: 'Unautherized' 
    });
  }

  const signedUrl = await firebase.storage().bucket().file(path).getSignedUrl({
    action: 'read',
    expires: Date.now() + 1000 *60
  })
  
  res.redirect(signedUrl[0]);

})


module.exports = router;