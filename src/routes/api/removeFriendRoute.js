const express = require('express');
const router = express.Router();
const friendController = require('../../controllers/friendController');

router.post('/api/removeFriend', function(req, res, next) {
    if(req.body.name.length < 40) {
        let resObject = {
            code: '200',
            textMessage: 'operation has been done succesfully',
            friend: req.body
        }
        friendController.removeFriend(req.body.name).then(function (err) {
           if(err) console.log(err);
            res.redirect(req.get('referer'));
        });
    }
    else {
        let resObject = {
            code: '400',
            textMessage: 'Error: name is too long'
        }
        res.redirect(req.get('referer'));
    }
});


module.exports = router;
