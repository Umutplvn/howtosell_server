"use strict";
/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */
const router=require('express').Router()
const Admin=require('../controllers/admin')

router.post('/create', Admin.create)
router.put('/update/:userId', Admin.update)
router.put('/verify/:userId', Admin.verify)
router.put('/updatepass', Admin.updatePassword)
router.delete('/delete', Admin.delete)
router.get('/list', Admin.list)
router.post("/forgotpass", Admin.forgotPass)
router.put("/updateforgettenpass/:userId", Admin.updateForgottenPassword)



module.exports = router;
