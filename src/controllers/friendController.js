const Friend = require('../models/Friend');

let friendController = {

    addFriend: function (_name, _favourite, _group) {
        let friendData = new Friend({
            name: _name,
            favourite: _favourite,
            group: _group
        });

        friendData.save();
    },
    findFriend : function (_name) {
      return Friend.find({name : _name}).exec();
    },
    findAllFriends: function () {
        return Friend.find({}).exec();
    },
    friendMakeFavourite : function (_name) {
            return Friend.update( { name: _name}, {favourite: true},{ upsert: true, new: true }).exec();
    },
    friendMakeUnFavourite : function (_name) {
        return Friend.update( { name: _name}, {favourite: false},{ upsert: true, new: true }).exec();
    },
    changeFriendGroup : function (_name, _group) {
        return Friend.update( { name: _name}, {group: _group},{ upsert: true, new: true }).exec();
    },
    removeFriend : function (_name) {
        return Friend.find({ name : _name}).remove().exec();
    }

}

//exports
module.exports = friendController;