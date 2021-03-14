const express = require('express');
const Action = require('../models/Action');


const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const actions = await Action.find({"user_id":process.env.TEST_USER_ID});
        res.json(actions);
    } catch (err) {
        res.json({message: err});
    }

});


router.post('/',async (req,res) => {
    const action = new Action({
        name: req.body.name, 
        user_id: process.env.TEST_USER_ID,
        used_weight: req.body.used_weight,
        used_times: req.body.used_times
    });
    try{
        const savedAction = await action.save();
        console.log('created actions success');
        res.json(savedAction);
        
    } catch (err) {
        console.log('created actions fail');
        res.json({message: err});
    }
});

// for test data only
router.post('/dev-addpullups',async (req,res) => {
    const action = new Action({
        name:'Pullups',
        user_id: process.env.TEST_USER_ID,
        used_weight:23.5,
        used_times:15,
    });
    try{
        const savedAction = await action.save();
        res.json(savedAction);
        console.log('save success');
    } catch (err) {
        res.json({message: err});
        console.log('save failed');
    }
});


module.exports = router