const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')
const multer = require('multer')



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname+'/index.html'))
//   res.send('all set')
})

app.post('/upload',function(req,res){
    res.json()
})

app.listen(8080, function () {
  console.log('listening on port 8080....')
})