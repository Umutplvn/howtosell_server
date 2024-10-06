"use strict";

/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: { type: String, trim:true },
    email: { type: String, trim:true },
    password:{type:String, trim:true}
    
});

const User = mongoose.model('Admin', adminSchema);
module.exports = User;
