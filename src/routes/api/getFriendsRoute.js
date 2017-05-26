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
        console.log(req.params.name);
        console.log(result)
        if(result) {
            return JSON.stringify(result);
        } else {
            return false;
        }
    });
})


module.exports = router;
