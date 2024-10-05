"use strict";

/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    user:{
        type:Object,
        trim:true,
        required:true
    }
  },
  
  {
    timestamps: true,
    collection: "user",
  }
);

module.exports = mongoose.model("User", UserSchema);
