import express from 'express';
import mongoose from 'mongoose';
import configuration from './src/configs/index.js';
import route from "./src/routes/authRoutes.js"

const app = express();

app.use(express.json())
app.use('/Auth',route)

mongoose.connect(configuration.DB)
.then (()=>
{

console.log("connected to database")
})
.catch(err=>
{
console.log(err)
})
app.listen(configuration.PORT,()=>
{
    console.log(`server is running on port ${configuration.PORT}`)
})
