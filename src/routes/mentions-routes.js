const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/mentions-controller');


router.post('/', mentionsController.createMention);
router.get('/', mentionsController.listMentions);
router.put('/:id', mentionsController.updateMention);
router.delete('/:id', mentionsController.deleteMention);


module.exports = router;