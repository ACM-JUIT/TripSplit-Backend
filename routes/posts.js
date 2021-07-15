const router = require('express').Router();
const verify = require('../authentication/verifyToken');


router.get('/',verify,(req,res)=>{
    res.send(req.user);
});

module.exports = router;