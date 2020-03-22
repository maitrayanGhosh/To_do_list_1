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
    // console.log(req.body)
    // console.log(req.body.fname)
    // console.log(req.body.task)
    // console.log(req.body.birthday)
    // console.log(req.body.prior)
    
    //var temp = {description:req.body.fname,     category:req.body.task,     dueDate:req.body.birthday , priority : req.body.prior }

    //taskList.push(temp)

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



app.get('/delete-task/',(req,res)=>{
    console.log(req.query)
    let desc  = req.query.description

    let taskInd = taskList.findIndex(descp => descp.description == desc)

    if(taskInd != -1 ){
        taskList.splice(taskInd,1);
    }

    return res.redirect('back')

})















// the server listening at port 5000
app.listen(port,(err)=>{
    if(err){
        console.log('error running server')
    }
    console.log('server running at port',port)
})