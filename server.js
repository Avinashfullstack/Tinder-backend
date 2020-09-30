// importing
import express from 'express'
import mongoose from 'mongoose'


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
app.get('/', (req, res) => {
    res.status(200).send("hello world")
})


// listener

app.listen(port, () => console.log(`listening on localhost :${port}`))