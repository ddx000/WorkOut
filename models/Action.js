const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const ActionSchema = new Schema({
    name: String,
    user_id: {type: mongoose.Schema.ObjectId, ref: 'Users'},
    used_weight: Number,
    used_times: Number,
});
 
module.exports = mongoose.model('Actions', ActionSchema);