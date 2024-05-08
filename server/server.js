// ! Bring the express module into our server file
const express = require('express')

// ! Create an instance of express, bu calling the function.
const app = express()
const port = 5000

// * The server will be attached to "localhost", at specific port (5000)

// ! Make server deliver our webpage
  // Tell the server where the files for the page are
app.use(express.static('server/public'))

// ? <----------- GET ROUTE -------------->
const quoteList = require('./quoteList')


// * GET Route to return some quotes
  // 1. A method type
  // 2. A path
  // 3. Callback function (arrow function)

app.get('/quotes', (req, res) =>{
  console.log('Quotes was requested')
  
  res.send(quoteList)
})

app.get('/authors', (req, res) => {
let authorList = []

  for (let quote of quoteList){
    authorList.push(quote.author)
  }

  res.send({authorList})
})


// ! Actually start server when file is ran
app.listen(
    port,
    () => { console.log("Listening on port...", port)}
)