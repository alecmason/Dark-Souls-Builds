const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/builds/:id/comments/', commentsCtrl.create);
// router.get('/builds/:id/comments/:id/', commentsCtrl.edit);
router.delete('/builds/:id/commments/:id', commentsCtrl.delete);

 
module.exports = router;