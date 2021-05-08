const { json } = require('body-parser')
const rp = require('request-promise')
const fs = require('fs')

module.exports = async function (giphy){
if (!giphy){
   giphy==='no text'
// throw new Error('Ведите имя гифки')
}
const KEY = '5CbzSikG64Ig5qWtq4FguBj163mW5WpR'
const url =`http://api.giphy.com/v1/gifs/search?q=${giphy}&api_key=${KEY}&limit=10&rating=g`
const requestParameters = {
url,
api_key: KEY,
q: giphy,
limit: 10,
rating: 'gp',
json: true,

}
const response = await rp(requestParameters)
  // console.log(response) 
  
function headleResult () {
       fs.writeFileSync('result.json', JSON.stringify(response), (err) =>{
    if (err) console.log('Error') } ) 
}
   headleResult()
 

 
}