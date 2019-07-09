const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/responseControllers')

router.get('/', ctrl.getResponses)
router.post('/', ctrl.createResponses)
router.put('/', ctrl.updateResponses)
router.delete('/:id', ctrl.deleteResponses)

module.exports = router;
