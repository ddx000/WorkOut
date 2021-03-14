const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.json({message: err});
    }

});

router.post('/',async (req,res) => {
    const user = new User({_id:'testname'});
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.json({message: err});
    }
});



module.exports = router