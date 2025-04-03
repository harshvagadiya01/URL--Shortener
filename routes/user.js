const express = require('express');
const router = express.Router();
const { handleUserSignup, handleUserLogin } = require('../controllers/user.js');

router.post('/', handleUserSignup);

router.post('/login', handleUserLogin);

router.post('/signup', handleUserSignup);

module.exports = router;