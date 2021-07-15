const router = require('express').Router();
const verify = require('../authentication/verifyToken');
const { findOne } = require('../model/group');
const Group = require('../model/group')

router.get('/',verify,(req,res)=>{
    });


router.post('/new',verify,async(req,res)=>{
    
    const group = new Group ({
        name:req.body.name,
        location:req.body.location,
        members:req.body.members,
        admin:req.body.admin,
    });
    
try
    {
     const savedGroup = await group.save();
     res.send({group:group._id});
    }   
catch(err)
    {
     res.status(400).send(err);
    }
});



