const express = require('express');
const router = express.Router();
const friendController = require('../../controllers/friendController');

router.post('/api/makeFavourite', function(req, res, next) {

    if(req.body.makeFavourite == 'true')
    {
       friendController.friendMakeFavourite(req.body.name).then(function (err,result) {
           if(err) res.send(err);
           res.send(result);
       })
    } else {
        friendController.friendMakeUnFavourite(req.body.name).then(function (err,result) {
            if(err) res.send(err);
            res.send(result);
        })
    }

});

router.post('/api/changeGroup', function (req,res,next) {
   friendController.changeFriendGroup(req.body.name,req.body.group).then(function (err,result) {
      if(err) res.send(err);
      res.send(result);
   });
})


module.exports = router;
