// requiring libraries
const express = require('express')
const path = require('path')
const port = 5000

const db = require('./config/mongoose')
const Task = require('./models/task')
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
        dueDate : "11/11/2020",
        priority : "high"
    },

    {
        description : "chicken",
        catagory : "personal",
        dueDate : "13/11/2020"
        ,
        priority : "medium"
    },

    {
        description : "hw",
        catagory : "school",
        dueDate : "12/11/2020",
        priority : "low"
    }
]



// controller
app.get('/',(req,res)=>{

    Task.find({},(err, task)=>{
        if(err){
            console.log('Error in fetching contacts')
            return
        }

        return res.render('home',{
            title: "To do list",
            test : "cat",
            task_list : task
        })
    })
})

// this handler is used to create task

app.post('/create_task',(req,res)=>{

    Task.create({
       description : req.body.fname,
       category:req.body.task,     
       dueDate:req.body.birthday, 
       priority : req.body.prior
    },(err,newTask)=>{
        if(err){
            console.log('error in creating a contact')
            return
        }

        console.log('***',newTask)
        return res.redirect('back')
    })
})

// this task is used to delete task

app.get('/delete-task/',(req,res)=>{
   
    let id = req.query.id

    Task.findByIdAndDelete(id,(err)=>{
        if(err){
        console.log('error in deleting object in database')
        return
        }
        return res.redirect('back')
    })

})















// the server listening at port 5000
app.listen(port,(err)=>{
    if(err){
        console.log('error running server')
    }
    console.log('server running at port',port)
})