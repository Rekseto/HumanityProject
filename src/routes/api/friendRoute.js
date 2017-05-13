const express = require('express');
const router = express.Router();

router.get('/api/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/api/addFriend', function(req, res, next) {
    let resObject = {
        code : '301',
        textMessage : 'operation has been done succesfully',
        friend : 'todo'
    }
    res.send(JSON.stringify(resObject));
});


module.exports = router;
