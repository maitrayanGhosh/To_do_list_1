
//require librery
const mongoose = require('mongoose')

// connect ot the database
mongoose.connect('mongodb://localhost/task_list_db')


const db = mongoose.connection

//error
db.on('error', console.error.bind(console,'error connecting to db'))

// up and running then print the messeage
db.once('open',()=>{
    console.log('successfully connected to the database')
})


