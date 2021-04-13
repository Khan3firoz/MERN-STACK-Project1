const express = require('express')
const app = express()

const port=4000

const middleware = (req, res, next) => {
  console.log("hi i am Middleware")
  next()
}
app.get('/',(req, res)=> {
  res.send('Hello World from the server ')
})
app.get('/home',(req, res)=> {
  res.send('Hello World from the home page ')
})
app.get('/aboutme', middleware, (req, res) => {
  console.log("hi i am about page")
  res.send('Hello World from the About me Page')
})
app.get('/signin',(req, res)=> {
  res.send('Hello World from the  signin page ')
})
app.get('/signup',(req, res)=> {
  res.send('Hello World from the signup page ')
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})