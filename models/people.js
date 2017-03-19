const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence');

const Schema = mongoose.Schema;

const peopleSchema = new Schema({
    _id: Number,
    name: String,
    favoriteCity: String,
    created_at: Date,
    updated_at: Date
}, { _id: false });

peopleSchema.plugin(AutoIncrement);
const People = mongoose.model('People', peopleSchema);

module.exports = People;