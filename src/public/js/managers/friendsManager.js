var friendsManager = (function () {
    _reciveData = function (req) {
    req.then(function (data) {
        for(var i =0; i<data.length; i++) {
            var componenet = new friendComponent(data[i].name,data[i].group,data[i].favourite);
            componenet.render();
        }
    });
    }

    return {
        reciveData : _reciveData
    }
})();