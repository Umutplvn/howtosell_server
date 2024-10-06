"use strict";
/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */
const router=require('express').Router()
const Admin=require('../controllers/admin')

router.post('/create', Admin.create)
router.put('/update', Admin.update)
router.put('/updatepass', Admin.updatePassword)



module.exports = router;
