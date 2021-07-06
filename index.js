const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Importing routes
const authRoute = require('./authentication/auth');
const postRoute = require('./routes/posts')
const grpRoute  = require('./routes/group')


dotenv.config();

//Connect to DB
mongoose.connect(process.env.DB_CONNECT,{useNewUrlParser:true}, 
() => console.log('Connected to db!'));

//Middleware
app.use(express.json());

//Route Middlewares
app.use('/api/user',authRoute);
app.use('/api/posts',postRoute);
app.use('/api/groups',grpRoute);


app.listen(9000,() =>console.log('Server Up and running'));