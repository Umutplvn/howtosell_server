"use strict";

/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */

const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: { type: String, trim:true, required:true },
    email: { type: String, trim:true,required:true },
    password:{type:String, trim:true, required:true},
    owner:{type:Boolean, trim:true, default:false},
    authorization:{type:Boolean, trim:true, default:false},
});

const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
