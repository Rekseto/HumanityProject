const express = require('express');
const router = express.Router();
const friendController = require('../../controllers/friendController');

router.post('/api/addFriend', function(req, res, next) {
    console.log(req.body.name.length);
    if(req.body.name.length < 40) {
        let resObject = {
            code: '301',
            textMessage: 'operation has been done succesfully',
            friend: 'todo'
        }
        friendController.addFriend(req.body.name,req.body.favourite, req.body.group);
        res.send(JSON.stringify(resObject));
    }
    else {
        let resObject = {
            code: '400',
            textMessage: 'Error: name is too long'
        }
        res.send(JSON.stringify(resObject));
    }
});


module.exports = router;
