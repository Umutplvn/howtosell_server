"use strict"

/*--------------------------------------*
EXPRESSJS - How To Sell Project with Mongoose
/*--------------------------------------*/

const express=require('express')
const app=express()
require('dotenv').config()
const PORT=process.env.PORT
const HOST=process.env.HOST

/*--------------------------------------*/

app.use(express.json())
app.use(require('cors')())

/*--------------------------------------*/
//! Connect to MongoDB with Mongoose:
require('./src/configs/dbConnection')

/*--------------------------------------*/

//! Authorization Middleware
app.use(require("./src/middlewares/authorization"));

/*--------------------------------------*/
//! Searching&Sorting&Pagination:
app.use('/control/admin', require("./src/middlewares/findSearchSortPage"));

/*--------------------------------------*/

//! Home Page

app.all('/', (req, res)=>{
    res.send({
        err:false,
        message:'Welcome to How To Sell',
    })
})


/*--------------------------------------*/
//! Routes:
app.use(require('./src/root/user'))
app.use('/control/admin', require('./src/root/admin'))
app.use('/control/auth', require('./src/root/auth'))
/*--------------------------------------*/
//! errorHandler:
app.use(require('./src/errorHandler'))


/*--------------------------------------*/
app.listen(PORT, ()=>console.log(`App is running: ${HOST}:${PORT} `))