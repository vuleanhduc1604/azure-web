const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const coresSchema = new Schema({
    avatar: {type: String, required: true},
    name: {type: String, required: true},
    stat: {type: String, required: true},
    contact: {type: String, required: true},
    link: {type: String, required: true}
}, {
    timestamps: true
})

const Cores = mongoose.model('Cores', coresSchema);

module.exports = Cores