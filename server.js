//VIDEO A 4:25

const express = require('express')
const app = express()
const path = require('path')

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')

//load static assets
app.use('/static',express.static(path.join(__dirname, 'public')))


//home route
app.get('/',(req, res) =>{
  res.render('base', {title: 'Login System'})
})

app.get('/coucou', (res, req) => {
  res.send('Yes!!!!')
})



app.listen(port, ()=> {
  console.log(` listening ${port}`)
})
