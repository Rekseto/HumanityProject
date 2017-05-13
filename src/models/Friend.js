const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
let friendSchema = new Schema({
    name: {type: String, required: true, unique: true},
    group: {type: String, required: true},
    favourite: {type: Boolean, required: true},
});

let Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;