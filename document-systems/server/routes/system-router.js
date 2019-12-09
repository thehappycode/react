const express = require('express');
const SystemController = require('../controllers/system-controller');
const router = express.Router();

router.post('/system', SystemController.createSystem);
router.put('/system/:id', SystemController.updateSystem);
router.delete('/system/:id', SystemController.deleteSytem);
router.get('/system/:id', SystemController.getSystemById);
router.get('/systems', SystemController.getSystems);

module.exports = router;