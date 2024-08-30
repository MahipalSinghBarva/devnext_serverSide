const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/quiz', userController.getQuizQuestions);
router.post('/saveScore', userController.saveUserScore);
router.get('/data', userController.getUserData);

module.exports = router;
