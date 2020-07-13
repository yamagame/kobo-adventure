const express = require('express')
const app = express()
const path = require('path')
const cookieParser = require('cookie-parser')
const port = 5000
const router = require('./router')

app.use(cookieParser())

app.use((req, res, next)=> {
  // console.log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  // console.log(req.headers);
  // console.log(req.cookies);
  res.publicFileSend = (filename) => {
    res.sendFile(path.join(__dirname, 'public', filename))
  }
  res.clearFlags = () => {
    const v = { ...req.cookies }
    Object.keys(v).forEach( k => res.clearCookie(k) )
  }
  res.setFlag = (flag, value=true) => {
    res.cookie(flag, value)
  }
  req.getFlag = (flag) => {
    if (req.cookies) {
      return req.cookies[flag];
    }
    return false;
  }
  next();
})

app.use(express.static('public', { redirect: false, }))

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
