const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/responseControllers')

router.get('/', ctrl.getResponses)

module.exports = router;
