const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.post('/signUp', userCtrl.signUp);
router.post('/login', userCtrl.login);
router.delete('/delete', userCtrl.deleteUser);

module.exports = router;
