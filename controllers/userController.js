const axios = require("axios");
const User = require('../models/User.js');


exports.getQuizQuestions = async (req, res) => {
    try {
        console.log('Fetching data from Open Trivia API...');
        const { data } = await axios.get('https://opentdb.com/api.php?amount=10');
        console.log('Data from API:', data);
        res.json(data.results);
    } catch (error) {
        console.error('Error in backend:', error);
        res.status(500).send('Error fetching quiz questions');
    }
};


exports.saveUserScore = async (req, res) => {
    const { username, score, feedback } = req.body;

    const newUser = new User({ username, score, feedback });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error('Error saving score:', error);
        res.status(500).send('Error saving score');
    }
};

exports.getUserData = async (req, res) => {
    const { username } = req.query;

    try {
        const userData = await User.findOne({ username });

        if (!userData) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
