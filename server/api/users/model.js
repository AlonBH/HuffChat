var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    isExposure: Boolean
});

export default mongoose.model('User', userSchema);