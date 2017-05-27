const express = require('express');
const router = express.Router();
const friendController = require('../../controllers/friendController');

router.post('/api/makeFavourite', function(req, res, next) {

    if(req.body.makeFavourite == 'true')
    {
       friendController.friendMakeFavourite(req.body.name).then(function (err,result) {
           if(err) res.send(err);
           res.redirect(req.get('referer'));
       })
    } else {
        friendController.friendMakeUnFavourite(req.body.name).then(function (err,result) {
            if(err) res.send(err);
            res.redirect(req.get('referer'));
        })
    }

});

router.post('/api/changeGroup', function (req,res,next) {
    friendController.changeFriendGroup(req.body.name,req.body.group).then(function (err,result) {
        if(err) res.send(err);
        res.redirect(req.get('referer'));
    });
});

router.post('/api/updateFriend' ,function (req,res,next) {
    let updateObject = {
        favourite: req.body.favourite,
        group : req.body.group
    }
    friendController.updateFriend(req.body.name,updateObject).then(function (err,result) {
        friendController.findFriend(req.body.name).then(function (result) {
            if(result) {
                res.send(JSON.stringify(result));
            } else {
                res.send(false);
            }
        })
    });
})
module.exports = router;
