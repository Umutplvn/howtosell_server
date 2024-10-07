"use strict";

const Admin = require("../models/admin");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const sendVerificationEmail = require("../helpers/emailVerification");
const forgotPassVerify=require('../helpers/forgotPassVerify')
/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */

module.exports = {
  create: async (req, res) => {
    let passcode = Math.floor(Math.random() * 100000) + 2000;
    const { name, email, password } = req.body;
    const user = await Admin.findOne({ email });
    const upName = name?.charAt(0).toUpperCase() + name?.slice(1).toLowerCase();

    if (!name || !email || !password) {
      res
        .status(400)
        .send({
          error: true,
          message: "Please fill the required credentials.",
        });
      return;
    }

    if (user) {
      res
        .status(400)
        .send({ error: true, message: "The email address is already in use." });
      return;
    }

    const newUser = await Admin.create({
      name,
      email,
      password: passwordEncrypt(password),
      owner: false,
      authorization: false,
    });
    const tokenData = "Token " + passwordEncrypt(newUser._id + `${new Date()}`);
    await Token.create({ userId: newUser._id, token: tokenData });
    sendVerificationEmail(email, passcode, upName);

    res.send({
      error: false,
      result: newUser,
      Token: tokenData,
      passcode,
    });
  },

  update: async (req, res) => {
    // {
    //   "userId":"670313c31a89b7acf576deeb",
    //   "updateData":{"authorization":"true"}
    //   }

    const { updateData, userId } = req.body;
    const user = req.user;
    const isAdmin = await Admin.findOne({ _id: user });

    if (isAdmin.owner) {
      const updatedUser = await Admin.findOneAndUpdate(
        { _id: userId },
        updateData,
        { new: true, runValidators: true }
      );
      res.status(202).send({
        error: false,
        result: updatedUser,
      });
    } else {
      res.status(202).send({
        error: false,
        message: "Only Owner can update the data!",
      });
    }
  },

  updatePassword: async (req, res) => {
    const password = req.body.password;

    await Admin.updateOne(
      { _id: req.user },
      { password: passwordEncrypt(password) },
      {
        runValidators: true,
      }
    );

    const newData = await Admin.findOne({ _id: req.user });
    res.status(202).send({
      error: false,
      message: "Password has changed successfully.",
      newData,
    });
  },

  delete: async (req, res) => {
    const { userId } = req.body;
    const data = await Admin.deleteOne({ _id: userId });

    if (data.deletedCount >= 1) {
      res.send({
        message: "Successfully deleted",
      });
    } else {
      res.send({
        message: "There is no recording to be deleted.",
      });
    }
  },

  forgotPass: async (req, res) => {
    const { email } = req.body;
    const user = await Admin.findOne({ email });
    const upName =user?.name.charAt(0).toUpperCase() + user?.name.slice(1).toLowerCase();

    if (!user) {
      res.status(400).send({ error: true, message: "User not found!" });
      return;
    } 

    const tokenData = "Token " + passwordEncrypt(user._id + `${new Date()}`);
    await Token.create({ userId: user._id, token: tokenData });

    forgotPassVerify({ email, name: upName, userId: user._id });

    res.status(201).send({
      error: false,
      Token: tokenData,
      result: user,
    });
  },

  updateForgottenPassword: async (req, res) => {
    const password = req.body.password;
    const {userId}=req.params

    await User.updateOne(
      { _id: userId },
      { password: password },
      {
        runValidators: true,
      }
    );
    const newData = await Admin.findOne({ _id: req.user });

    res.status(202).send({
      error: false,
      message: "Password has changed successfully.",
      result: newData,
    });
  },



  list: async (req, res) => {
    const data = await req.getModelList(Admin);
    const user = req.user;
    const isAdmin = await Admin.findOne({ _id: user });

    if(isAdmin.owner){
      res.status(200).send({
        error: false,
        count: data.length,
        result: data,
      });
    }else{
      res.status(200).send({
        error: false,
        result: "You have no authorization to see this page.",
      });
    }

  },
};
