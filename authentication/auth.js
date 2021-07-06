const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {registerValidation,loginValidation} = require('./validation');






router.post('/register',async(req,res)=>
{
    //Validation
    const{error} = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    //checking db if user exists
    const emailExist = await User.findOne({email:req.body.email})
    if (emailExist) return res.status(400).send('Email already exists');

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);




    //new user creation
    const user = new User ({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword
    });
try{
    const savedUser = await user.save();
    res.send({user:user._id});
}catch(err){
    res.status(400),send(err);
}
});

//Login
router.post('/login',async(req,res)=>{
    //validate
    const{error} = loginValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
    //email exists?
    const user= await User.findOne({email:req.body.email})
    if (!user) return res.status(400).send('Email does not exist.');
    //password check
    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid Password');

    //creating and assigning token
    const token = jwt.sign({_id:user._id},process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);



});

module.exports = router;
