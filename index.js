const express = require('express')
const app = express()
const multer = require('multer');
const ftpStorage = require("multer-ftp");
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})
const storage = new ftpStorage({
    ftp: {
      host: 'www.macompta.com.tn',
      secure: false, // enables FTPS/FTP with TLS
      user: 'macompta',
      password: '2?1VgMx?02jOqW',
      connTimeout: 60000,
      pasvTimeout: 60000,
        },
    console.log("Just got a request!")
    res.send('ftp connect!')
})
app.listen(process.env.PORT || 3000)
