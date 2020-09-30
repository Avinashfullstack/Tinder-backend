import e from 'express';
// importing
import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'


// App config
const app = express();
const port = process.env.Port || 8001
const connection_url = 'mongodb+srv://admin:avinash@cluster0.nj8ss.mongodb.net/tinderdb?retryWrites=true&w=majority'



// Middleware



// Db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

})

// Api Endpoints
 app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;

    Cards.create(dbCard,(err,data)=>{
        if (err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
 })


// listener

app.listen(port, () => console.log(`listening on localhost :${port}`))