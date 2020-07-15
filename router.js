const express = require('express')
const router = express.Router()
const fetch = require('node-fetch');

const ipaddress = 'localhost'

function talk(body) {
  (async () => {
    console.log(body);
    try {
      const response = await fetch(`http://${ipaddress}:3090/speech`, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body,
      });
      if (response.ok) {
        const text = await response.text();
        console.log(text);
      }
    } catch(err) {
    }
  })();
}

router.get('/scene-1', (req, res) => {
  res.publicFileSend(`scene-1.html`)
  talk('道が続いている。どうする？')
})

router.get('/scene-2', (req, res) => {
  if (req.getFlag('get-key')) {
    res.redirect('/scene-4')
  } else {
    res.publicFileSend(`scene-2.html`)
    talk('カギが落ちている。どうする？')
  }
})

router.get('/scene-3', (req, res) => {
  res.publicFileSend(`scene-3.html`)
  talk('道は左右に分かれている。どちらに進む？')
})

router.get('/scene-4', (req, res) => {
  res.setFlag('get-key')
  res.publicFileSend(`scene-4.html`)
  talk('道が続いている。どうする？')
})

router.get('/scene-5', (req, res) => {
  res.publicFileSend(`scene-5.html`)
  talk('道は左右に分かれている。どちらに進む？')
})

router.get('/scene-6', (req, res) => {
  res.publicFileSend(`scene-6.html`)
  talk('モンスターが現れた！どうする？')
})

router.get('/scene-7', (req, res) => {
  res.publicFileSend(`scene-7.html`)
  talk('道は左右に分かれている。どちらに進む？')
})

router.get('/scene-8', (req, res) => {
  if (req.getFlag('get-key')) {
    res.publicFileSend(`scene-8.html`)
    talk('扉がある。どうする？')
  } else {
    res.redirect('/scene-9')
  }
})

router.get('/scene-9', (req, res) => {
  res.publicFileSend(`scene-9.html`)
  talk('扉がある。カギがかかっていて進めない。')
})

router.get('/scene-10', (req, res) => {
  res.publicFileSend(`scene-10.html`)
  talk('道は左右に分かれている。どちらに進む？')
})

router.get('/scene-11', (req, res) => {
  res.setFlag('get-sword')
  res.publicFileSend(`scene-11.html`)
  talk('道が続いている。どうする？')
})

router.get('/scene-12', (req, res) => {
  if (req.getFlag('get-key')) {
    res.publicFileSend(`scene-12.html`)
    talk('剣が落ちている。どうする？')
  } else {
    res.redirect('/scene-11')
  }
})

router.get('/gamestart', (req, res) => {
  res.clearFlags()
  res.publicFileSend(`gamestart.html`)
  talk('ここはトランシルバニア。モンスターが持つという宝を求めて私はやってきた。');
})

router.get('/gameclear', (req, res) => {
  if (req.getFlag('get-sword')) {
    res.publicFileSend(`gameclear.html`)
    talk('やった！モンスターを倒して宝箱を手に入れたぞ！');
  } else {
    res.redirect('/gameover')
  }
})

router.get('/gameover', (req, res) => {
  res.publicFileSend(`gameover.html`)
  talk('モンスターにやられてしまった！')
})

module.exports = router
