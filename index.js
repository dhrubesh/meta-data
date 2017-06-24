const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const multer = require('multer')
const upload = multer()


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'))
//   res.send('all set')
})

app.post('/upload',upload.single('file'),function(req,res){
    // console.log(req.file)
    res.json("size:"+ req.file.size)
})

app.listen(8080, function () {
  console.log('listening on port 8080....')
})