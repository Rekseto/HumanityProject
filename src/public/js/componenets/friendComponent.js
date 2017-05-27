class friendComponent {
    constructor(_name,_group,_favourite){
        this.name = _name;
        this.group = _group;
        this.favourite = _favourite;
    }

    setFavourite(_favourite) {
        this.favourite = _favourite;
    }

    setElement(element) {
        this.element = element;
    }

    refreshComponent() {
        let toUpdate = {name: this.name, group: this.group, favourite: this.favourite}
        let that = this;
        ajax().get('/api/getFriend/' + this.name).then(function (res) {

               ajax().post('/api/updateFriend', toUpdate).then(function (res) {
                   let range = document.createRange();
                   let favouriteButton = '<button aria-label="favourite button" class="friendElement-favouriteButton" data-favourite="true"> <img src="/icons/star.svg" class="icon"></button>'
                   let unfavouriteButton = '<button aria-label="favourite button" class="friendElement-favouriteButton"  data-favourite="false"> <img src="/icons/half-star.svg" class="icon"></button>'

                   let nameElement = '<strong class="friendElement-nameBlock">'+ toUpdate.name +'</strong>';
                   let deleteElement = '<button aria-label="remove Friend" class="friendElement-removeButton"><img class="icon" src="/icons/bin.svg" aria-hidden="true"></button>';
                   if(res[0].favourite == true) {
                       var ElementNode = range.createContextualFragment('<li class="list-friendElement">' +'<span class="friendElement-separator">' + nameElement + '</span>' + '<span class="friendElement-separator">' + unfavouriteButton + deleteElement + '</span>' + '</li>');

                       var children = [].slice.call(ElementNode.childNodes, 0);
                       that.element[0].parentNode.replaceChild(ElementNode, that.element[0]);
                       that.setElement(children);
                       that.initEvents();
                   } else {
                       var ElementNode = range.createContextualFragment('<li class="list-friendElement">' +'<span class="friendElement-separator">' + nameElement + '</span>' + '<span class="friendElement-separator">' + favouriteButton + deleteElement + '</span>' + '</li>');
                       var children = [].slice.call(ElementNode.childNodes, 0);
                       that.element[0].parentNode.replaceChild(ElementNode, that.element[0]);
                       that.setElement(children);
                       that.initEvents();
                   }
               });

            });
    }



    initEvents() {
        var that = this;
        this.element[0].querySelector('.friendElement-removeButton').addEventListener('click',function (e) {
            let target = e.currentTarget;
            let _name = e.currentTarget.parentNode.parentNode.firstChild.firstChild.textContent;
            ajax().post('/api/removeFriend', { name : _name }).then(function () {
                target.parentNode.parentNode.remove();
            });
        });
        this.element[0].querySelector('.friendElement-favouriteButton').addEventListener('click',function (e) {
            let _fav = e.currentTarget.dataset.favourite;
            that.setFavourite(_fav);
            that.refreshComponent();
        });
    }

    render() {

        let favouriteButton = '<button aria-label="favourite button" class="friendElement-favouriteButton" data-favourite="true"> <img src="/icons/star.svg" class="icon"></button>'
        let unfavouriteButton = '<button aria-label="favourite button" class="friendElement-favouriteButton"  data-favourite="false"> <img src="/icons/half-star.svg" class="icon"></button>'


        let nameElement = '<strong>'+ this.name +'</strong>';
        let deleteElement = '<button aria-label="remove Friend" class="friendElement-removeButton"><img class="icon" src="/icons/bin.svg" aria-hidden="true"></button>';
        let range = document.createRange();
        if(this.favourite == true) {

            var ElementNode = range.createContextualFragment('<li class="list-friendElement">' +'<span class="friendElement-separator">' + nameElement + '</span>' + '<span class="friendElement-separator">' + unfavouriteButton + deleteElement + '</span>' + '</li>');

            var children = [].slice.call(ElementNode.childNodes, 0);

            document.querySelector('.article-list--' + this.group).appendChild(children[0]);
            this.setElement(children);
            this.initEvents();
        } else {
            var ElementNode = range.createContextualFragment('<li class="list-friendElement">' +'<span class="friendElement-separator">' + nameElement + '</span>' + '<span class="friendElement-separator">' + favouriteButton + deleteElement + '</span>' + '</li>');
            var children = [].slice.call(ElementNode.childNodes, 0);
            document.querySelector('.article-list--' + this.group).appendChild(children[0]);
            this.setElement(children);
            this.initEvents();
        }
    }

}