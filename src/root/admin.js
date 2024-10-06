"use strict";
/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */
const router=require('express').Router()
const Admin=require('../controllers/admin')

router.post('control/admin/create', Admin.create)
router.put('control/admin/update', Admin.update)
router.put('control/admin/updatepass', Admin.updatePassword)



module.exports = router;
