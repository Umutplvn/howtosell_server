"use strict";

const express = require("express");
const tokenModel = require("../models/token");

module.exports = async (req, res, next) => {
  const tokenData = req?.headers?.authorization || null;
  req.isLogin = false;

  if (tokenData) {
    try {
      const authToken = await tokenModel.findOne({ token: tokenData }).populate("userId");
      if (authToken && authToken.userId) {
        req.isLogin = true;
        req.user = authToken.userId._id;
      }
    } catch (error) {
      console.error("Token verification error:", error);
    }
  }

  next();
};
