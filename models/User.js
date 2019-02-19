const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true        
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

var Users = mongoose.model('users', userSchema);

module.exports = Users;