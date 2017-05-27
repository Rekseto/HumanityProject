const express = require('express');
const router = express.Router();
const friendController = require('../../controllers/friendController');

router.get('/api/getFriends', function(req, res, next) {
        friendController.findAllFriends().then(function (result) {
            res.send(JSON.stringify(result));
            });

});

router.get('/api/getFriend/:name', function (req,res,next) {
    friendController.findFriend(req.params.name).then(function (result) {
        if(result) {
            res.send(JSON.stringify(result));
        } else {
            res.send(false);
        }
    });
})


module.exports = router;
