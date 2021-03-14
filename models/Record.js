const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const RecordSchema = new Schema({
    user_id: {type: mongoose.Schema.ObjectId, ref: 'Users'},
    action_id: {type: mongoose.Schema.ObjectId, ref: 'Actions'},
    weight: Number,
    times: Number,
},
{ timestamps: { createdAt: 'created_at' } });
 
module.exports = mongoose.model('Records', RecordSchema);