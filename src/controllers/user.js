"use strict";

const sendEmail = require("../helpers/sendEmail");
const User = require("../models/user");

/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */

module.exports = {
  create: async (req, res) => {
  
    const {email, name, age, lastname, phone, instagram, occupation, descOfJob, income, goal, obstacles, directInvest} = req.body;

    const data = await User.create({email, name, age, lastname, phone, instagram, occupation, descOfJob, income, goal, obstacles, directInvest});
    sendEmail(email, name, age, lastname, phone, instagram, occupation, descOfJob, income, goal, obstacles, directInvest)

    res.send({
      error: false,
      result: data,
    })
}}
