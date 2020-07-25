const express = require('express');
const router = express.Router();
const dealController = require('../controllers/deal-controller');

router.post('/', dealController.createDeal);
router.get('/', dealController.listDeal);
router.get('/aggregate', dealController.aggregateDeal);
router.put('/:id', dealController.updateDeal);
router.delete('/:id', dealController.deleteDeal);


module.exports = router;