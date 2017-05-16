const express = require('express');
const router = express.Router();
const friendController = require('../../controllers/friendController');

router.get('/api/getFriends', function(req, res, next) {
        friendController.findAllFriends().then(function (result) {
            res.send(JSON.stringify(result));
            });

});


module.exports = router;
