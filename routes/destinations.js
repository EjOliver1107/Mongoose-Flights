const express = require('express');
const router = express.Router();
// create the views controller
const destinationsCtrl = require('../controllers/destinations');

// POST route
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;