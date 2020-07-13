const express = require('express')
const router = express.Router()

router.get('/scene-1', (req, res) => {
  res.publicFileSend(`scene-1.html`)
})

router.get('/scene-2', (req, res) => {
  if (req.getFlag('get-key')) {
    res.redirect('/scene-4')
  } else {
    res.publicFileSend(`scene-2.html`)
  }
})

router.get('/scene-3', (req, res) => {
  res.publicFileSend(`scene-3.html`)
})

router.get('/scene-4', (req, res) => {
  res.setFlag('get-key')
  res.publicFileSend(`scene-4.html`)
})

router.get('/scene-5', (req, res) => {
  res.publicFileSend(`scene-5.html`)
})

router.get('/scene-6', (req, res) => {
  res.publicFileSend(`scene-6.html`)
})

router.get('/scene-7', (req, res) => {
  res.publicFileSend(`scene-7.html`)
})

router.get('/scene-8', (req, res) => {
  if (req.getFlag('get-key')) {
    res.publicFileSend(`scene-8.html`)
  } else {
    res.redirect('/scene-9')
  }
})

router.get('/scene-9', (req, res) => {
  res.publicFileSend(`scene-9.html`)
})

router.get('/scene-10', (req, res) => {
  res.publicFileSend(`scene-10.html`)
})

router.get('/scene-11', (req, res) => {
  res.setFlag('get-sword')
  res.publicFileSend(`scene-11.html`)
})

router.get('/scene-12', (req, res) => {
  if (req.getFlag('get-key')) {
    res.publicFileSend(`scene-12.html`)
  } else {
    res.redirect('/scene-11')
  }
})

router.get('/gamestart', (req, res) => {
  res.clearFlags()
  res.publicFileSend(`gamestart.html`)
})

router.get('/gameclear', (req, res) => {
  if (req.getFlag('get-sword')) {
    res.publicFileSend(`gameclear.html`)
  } else {
    res.redirect('/gameover')
  }
})

router.get('/gameover', (req, res) => {
  res.publicFileSend(`gameover.html`)
})

module.exports = router
