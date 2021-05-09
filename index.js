const express = require('express')
const bodyParser = require('body-parser')
const giphyRequest = require('./request/giphy-request.js') 
const fs = require('fs')
const { json } = require('body-parser')
const app = express()
const headleResult = require('./request/giphy-request')


app.set('view engine', 'ejs')
app.use(express.static('public'))
 
app.use(bodyParser.urlencoded({extended: true}))
app.get('/', (reg, res) =>{
    res.render('index')
  
   
})
app.post('/', (req, res) =>{
   const {giphy} = req.body
   giphyRequest(giphy)
   
  const all = fs.readFileSync('result.json', 'utf-8', (err, data) => {
        if(err) throw err;
        console.log(data);
    });
   const allResult = JSON.parse(all)
  res.render('index', {data: allResult.data})
  
})


 
app.listen(3000, () => {
     console.log('server has started on port 3000')
     })