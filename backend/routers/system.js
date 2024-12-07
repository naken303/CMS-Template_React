const express = require('express');
const router = express.Router();

const {
    createUserRole,
    getRoles
} = require('../controller/system-controller');

router.post('/userroles', createUserRole);
router.get('/userroles', getRoles);

module.exports = router;