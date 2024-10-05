"use strict";
/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */
const router=require('express').Router()
const User=require('../controllers/user')

router.post('/create', User.create)



module.exports = router;
