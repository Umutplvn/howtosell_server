"use strict";

const sendEmail = require("../helpers/sendEmail");
const User = require("../models/user");
const Admin = require("../models/admin");

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
},

update:async(req,res)=>{
// "userId":"670200baf6351da6f0ba538a",
// "updateData":{"name":"deneme"}}

  const {updateData, userId} = req.body;
  console.log('Incoming update data:', updateData);
  console.log('User ID:', userId);
  const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    updateData,
    { new: true, runValidators: true }
  );
  res.status(202).send({
    error: false,
    result: updatedUser,
  });
},


delete: async (req, res) => {
  const { userId } = req.body;
  const data = await User.deleteOne({ _id: userId });
 
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

list: async (req, res) => {
  const data = await req.getModelList(User);
  const user = req.user;
  const isAdmin = await Admin.findOne({ _id: user });

  if(isAdmin.authorization){
    res.status(200).send({
      error: false,
      count: data.length,
      result: data
    });
  }else{
    res.status(200).send({
      error: false,
     result:"You have no authorization to see this page!"
    });
  }
 
},


}
