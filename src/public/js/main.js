(function () {
    document.addEventListener('DOMContentLoaded', function () {
        document.querySelector('#updateGroup').addEventListener('submit',function (e) {
        e.preventDefault();
            ajax().post('/api/changeGroup', { name : document.querySelector('#name').value, group :  document.querySelector('#group').value}).then(function () {
              window.location.reload(true);
            })
        });

      var req = ajax({
          method: 'get',
          url: '/api/getFriends'
      });
        friendsManager.reciveData(req);
    });
})();