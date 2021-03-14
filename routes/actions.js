const express = require('express');
const Action = require('../models/Action');


const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const actions = await Action.find();
        res.json(actions);
    } catch (err) {
        res.json({message: err});
    }

});

router.post('/',async (req,res) => {
    const action = new Action({name:'testaction'});
    try{
        const savedAction = await action.save();
        res.json(savedAction);
    } catch (err) {
        res.json({message: err});
    }
});

router.post('/dev-addpullups',async (req,res) => {
    const action = new Action({
        name:'Pullups',
        user_id: '604dd2a82495e328f87e6678',
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