const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const membersSchema = new Schema({
    avatar: {type: String, required: true},
    name: {type: String, required: true},
    stat: {type: String, required: true},
    contact: {type: String, required: true},
    link: {type: String, required: true}
}, {
    timestamps: true
})

const Members = mongoose.model('Members', membersSchema);

module.exports = Members