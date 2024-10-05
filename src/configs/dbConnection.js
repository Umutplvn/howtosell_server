"use strict"
/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')
console.log(process.env.MONGODB);
mongoose.connect(process.env.MONGODB)
    .then(() => console.log(' * DB Connected * '))
    .catch((err) => console.log(' * DB Not Connected * ', err))