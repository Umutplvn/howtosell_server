"use strict";

/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    age: { type: String, trim:true },
    name: { type: String, trim:true },
    lastname: { type: String, trim:true },
    email: { type: String, trim:true },
    phone: { type: String, trim:true },
    instagram: { type: String, trim:true },
    occupation: { type: String, trim:true },
    descOfJob: { type: String, trim:true },
    income: { type: String, trim:true },
    goal: { type: String, trim:true },
    obstacles: { type: String, trim:true },
    directInvest: { type: String, trim:true },

}, {collection:'user', timestamps:true});

const User = mongoose.model('User', userSchema);
module.exports = User;
