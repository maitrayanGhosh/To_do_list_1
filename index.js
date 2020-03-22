// requiring libraries
const express = require('express')
const path = require('path')
const port = 5000

// instatiating express
const app = express()

//setting up view engine
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
//middleware reads the form data
app.use(express.urlencoded())
// for static files
app.use(express.static('assets'))



// controller
app.get('/',(req,res)=>{
    return res.render('home')
})



















// the server listening at port 5000
app.listen(port,(err)=>{
    if(err){
        console.log('error running server')
    }
    console.log('server running at port',port)
})