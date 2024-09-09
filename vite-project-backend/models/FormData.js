const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,

    },
});

const FormData = mongoose.model('FormData',FormDataSchema);
module.exports = FormData;

