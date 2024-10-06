"use strict";
/* -------------------------------------------------------
    EXPRESSJS - How To Sell Project
------------------------------------------------------- */
const router=require('express').Router()
const User=require('../controllers/user')

router.post('/create', User.create)
router.put('/update', User.update)
router.get('/list', User.list)
router.delete('/delete', User.delete)



module.exports = router;
