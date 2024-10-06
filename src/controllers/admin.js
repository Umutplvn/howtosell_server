"use strict";

const Admin = require("../models/admin");
const Token=require('../models/token')
const passwordEncrypt=require('../helpers/passwordEncrypt')
/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */

module.exports = {
  create: async (req, res) => {
  
    const {name, email, password} = req.body;
    const userEmail = await Admin.findOne({ email, password });

    if (userEmail) {
        res
          .status(400)
          .send({ error: true, message: "The email address is already in use." });
        return;
      }

      const newUser = await Admin.create({name, email, password});
      const tokenData = "Token " + passwordEncrypt(newUser._id + `${new Date()}`);
      await Token.create({ userId: newUser._id, token: tokenData });

    res.send({
      error: false,
      result: newUser,
      Token: tokenData,
    })
},



update: async (req, res) => {
    const updateData = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      updateData,
      { new: true, runValidators: true }
    );

    res.status(202).send({
      error: false,
      result: updatedUser,
    });
  },



  updatePassword: async (req, res) => {
    const password = req.body.password;

    await User.updateOne(
      { _id: req.user },
      { password: password },
      {
        runValidators: true,
      }
    );
    const newData = await User.findOne({ _id: req.user });

    res.status(202).send({
      error: false,
      message: "Password has changed successfully.",
      result: newData,
    });
  },

}
