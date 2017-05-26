class friendComponent {
    constructor(name,group,favourite){
        this.name = name;
        this.group = group;
        this.favourite = favourite;
    }

    refreshComponent() {
        //todo
        ajax().get('/api/getFriend/' + this.name).then(function (result) {
            console.log(result)
        })
    }

    setElement(element) {
        this.element = element;
    }


    initEvents() {
        var self = this;
        this.element[0].querySelector('.friendElement-removeButton').addEventListener('click',function (e) {
            let target = e.currentTarget;
            let _name = e.currentTarget.parentNode.firstChild.textContent;
            ajax().post('/api/removeFriend', { name : _name }).then(function () {
                target.parentNode.remove();
            });
        });
        this.element[0].querySelector('.friendElement-favouriteButton').addEventListener('click',function (e) {
            let _name = e.currentTarget.parentNode.firstChild.textContent;
            ajax().post('/api/makeFavourite', { name : _name, makeFavourite : true }).then(function () {
                self.refreshComponent();
            });
        });
    }

    render() {

        let favouriteButton = '<button aria-label="favourite button" class="friendElement-favouriteButton" data-favourite="true"> <img src="/icons/half-star.svg" class="icon"></button>'
        let unfavouriteButton = '<button aria-label="favourite button" class="friendElement-favouriteButton"  data-favourite="false"> <img src="/icons/star.svg" class="icon"></button>'
         

        let nameElement = '<strong>'+ this.name +'</strong>';
        let deleteElement = '<button aria-label="remove Friend" class="friendElement-removeButton"><img class="icon" src="/icons/bin.svg" aria-hidden="true"></button>';
        let range = document.createRange();
        if(this.favourite == true) {

            var ElementNode = range.createContextualFragment('<li class="list-friendElement">' + nameElement + favouriteButton + deleteElement + '</li>');

            var children = [].slice.call(ElementNode.childNodes, 0);
            document.querySelector('.article-list--' + this.group).appendChild(ElementNode);
            this.setElement(children);
            this.initEvents();
            console.log(children);
        } else {
            var ElementNode = range.createContextualFragment('<li class="list-friendElement">' + nameElement + unfavouriteButton + deleteElement + '</li>');
            var children = [].slice.call(ElementNode.childNodes, 0);
            document.querySelector('.article-list--' + this.group).appendChild(ElementNode);
            this.setElement(children);
            this.initEvents();
            console.log(children);
        }
    }

}