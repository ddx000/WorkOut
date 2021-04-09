const express = require('express');
const Record = require('../models/Record');


const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const records = await Record.find();
        res.json(records);
    } catch (err) {
        res.json({message: err});
    }

});
// get by id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Record.findById(id);
        res.json(record);
    } catch (err) {
        res.json({ message: err })
    }
})

router.post('/',async (req,res) => {
    const record = new Record({
        user_id: process.env.TEST_USER_ID,
        action_id: req.body.action_id,
        weight: req.body.weight,
        times: req.body.times
    });
    try{
        const savedRecord = await record.save();
        res.json(savedRecord);
    } catch (err) {
        res.json({message: err});
    }
});

// delete
router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Record.remove({ _id: id });
        res.json(record)
    } catch (err) {
        res.json(err)
    }
})

// patch
router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const record = await Record.updateOne({ _id: id }, {
            $set: { weight: req.body.weight }
        });
        res.json(record);
    } catch (err) {
        res.json(err);
    }
})
module.exports = router