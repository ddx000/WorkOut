const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    auth_token: String
});
 
module.exports = mongoose.model('Users', UserSchema);