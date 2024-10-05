"use strict";

const sendEmail = require("../helpers/sendEmail");
const User = require("../models/user");

/* -------------------------------------------------------
    EXPRESSJS - DEFI Project
------------------------------------------------------- */

module.exports = {
  create: async (req, res) => {
 
    const {user} = req.body;

    const data = await User.create({user});
    sendEmail(user)
    res.send({
      error: false,
      result: user,
    })
}}
