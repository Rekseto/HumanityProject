const express = require('express');
const router = express.Router();
const friendController = require('../../controllers/friendController');

router.post('/api/addFriend', function(req, res, next) {
    if(req.body.name.length < 40) {
        let resObject = {
            code: '200',
            textMessage: 'operation has been done successfully',
            friend: req.body
        }
        if(req.body.favourite == 'on') {
            friendController.addFriend(req.body.name, req.body.favourite, req.body.group);
            res.redirect(req.get('referer'));
        }
        else {
            friendController.addFriend(req.body.name, false, req.body.group);
            res.redirect(req.get('referer'));
        }
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
