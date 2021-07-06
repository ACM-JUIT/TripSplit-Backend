const router = require('express').Router();
const verify = require('../authentication/verifyToken');
const Group = require('../model/group')

router.get('/',verify,(req,res)=>{
    res.send(req.group);
});

router.post('/new',verify,async(req,res)=>{
    
    

    const group = new Group ({
        name:req.body.name,
        location:req.body.location,
        members:req.body.members,
        admin:req.body.admin,
        amount:req.body.amount
    });
try{
     const savedGroup = await user.group();
     res.send({group:group._id});
    }   
catch(err)
    {
     res.status(400),send(err);
    }
});



module.exports = router;