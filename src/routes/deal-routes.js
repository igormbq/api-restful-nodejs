const express = require('express');
const router = express.Router();
const dealController = require('../controllers/deal-controller');

router.post('/', dealController.createDeal);
router.get('/', dealController.listDeal);
router.put('/:id', dealController.updateDeal);
router.delete('/:id', dealController.deleteDeal);
router.get('/aggregate', dealController.aggregateDeal);

module.exports = router;