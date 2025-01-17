const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    score: Number,
    feedback: [
        {
            question: String,
            selected: String,
            correct: Boolean
        }
    ],
    date: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
