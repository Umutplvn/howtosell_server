"use strict";

/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    age: { type: Number, required: true },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    instagram: { type: String },
    occupation: { type: String },
    descOfJob: { type: String },
    income: { type: String },
    goal: { type: String },
    obstacles: { type: String },
    directInvest: { type: String },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
