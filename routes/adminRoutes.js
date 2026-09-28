const express = require('express');
const router = express.Router();
const { login, getMe } = require('../controllers/adminController');

// Admin authentication & profile routes
router.post('/admin/login', login);
router.post('/login', login);

router.get('/admin/me', getMe);
router.get('/me', getMe);

module.exports = router;
