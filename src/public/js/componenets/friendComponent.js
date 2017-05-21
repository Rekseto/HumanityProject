class friendComponent {
    constructor(name,group,favourite){
        this.name = name;
        this.group = group;
        this.favourite = favourite;
    }

    render() {

        let favouriteButton = '<button aria-label="favourite button" class="friendElement-favouriteButton" data-favourite="true"> <img src="/icons/half-star.svg" class="icon"></button>'
        let unfavouriteButton = '<button aria-label="favourite button" class="friendElement-favouriteButton"  data-favourite="false"> <img src="/icons/star.svg" class="icon"></button>'
         

        let nameElement = '<strong>'+ this.name +'</strong>';
        let deleteElement = '<button aria-label="remove Friend" class="friendElement-removeButton"><img class="icon" src="/icons/bin.svg" aria-hidden="true"></button>';

        if(this.favourite == true) {
            document.querySelector('.article-list--' + this.group).insertAdjacentHTML('afterbegin', '<li class="list-friendElement">' + nameElement + favouriteButton + deleteElement + '</li>');
        } else {
            document.querySelector('.article-list--' + this.group).insertAdjacentHTML('afterbegin', '<li class="list-friendElement">' + nameElement + unfavouriteButton + deleteElement + '</li>');
        }
        document.querySelector('.friendElement-removeButton').addEventListener('click',function (e) {
           let target = e.currentTarget;
           let _name = e.currentTarget.parentNode.firstChild.textContent;
           ajax().post('/api/removeFriend', { name : _name }).then(function () {
                target.parentNode.remove();
            });
        });
        document.querySelector('.friendElement-favouriteButton').addEventListener('click',function (e) {
            //todo
            let _name = e.currentTarget.parentNode.firstChild.textContent;
            ajax().post('/api/makeFavourite', { name : _name, makeFavourite : true }).then(function () {

            });
        });

    }

}