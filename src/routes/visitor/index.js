const express = require('express');
const router = express.Router();
const friendController = require('../../controllers/friendController');

router.get('/', function(req, res, next) {
    res.render('index', {

    });
});


module.exports = router;
