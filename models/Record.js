const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const RecordSchema = new Schema({
    time: Date,
    user_id: {type: mongoose.Schema.ObjectId, ref: 'Users'},
    action_id: {type: mongoose.Schema.ObjectId, ref: 'Actions'},
    weight: Number,
    times: Number,
});
 
module.exports = mongoose.model('Records', RecordSchema);