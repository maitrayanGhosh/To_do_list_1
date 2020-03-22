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


var taskList=[
    {
        description : "milk",
        catagory : "personal",
        dueDate : "11/11/2020"
    },

    {
        description : "chicken",
        catagory : "personal",
        dueDate : "13/11/2020"
    },

    {
        description : "hw",
        catagory : "school",
        dueDate : "12/11/2020"
    },
]



// controller
app.get('/',(req,res)=>{
    return res.render('home',{
        title: "To do list",
        test : "cat",
        task_list : taskList
    })
})



app.post('/create_task',(req,res)=>{
  
    // Contact.create({
    //     name : req.body.name,
    //     phone : req.body.phone
    // },(err,newContact)=>{
    //     if(err){
    //         console.log('error')
    //         return
    //     }
    //     console.log('******', newContact)
    //     return res.redirect('back')
    // })
    
})



















// the server listening at port 5000
app.listen(port,(err)=>{
    if(err){
        console.log('error running server')
    }
    console.log('server running at port',port)
})