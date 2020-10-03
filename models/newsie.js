//Destructure Schema and model from mongoose
const { Schema, model } = require('mongoose');

const newsieSchema = Schema({
    url: { type: String, required: true }
});

module.exports = model('newsie', newsieSchema);
