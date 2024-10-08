"use strict";
/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */
const router=require('express').Router()
const Admin=require('../controllers/admin')

router.post('/create', Admin.create)
router.put('/update', Admin.update)
router.put('/verify', Admin.verify)
router.put('/updatepass', Admin.updatePassword)
router.delete('/delete', Admin.delete)
router.get('/list', Admin.list)
router.post("/forgotpass", Admin.forgotPass)
router.post("/updateforgettenpass/:userId", Admin.updateForgottenPassword)



module.exports = router;
