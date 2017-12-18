document.addEventListener('DOMContentLoaded', () => {



    /*CONSTRUCTOR*/

    let Producer = function(name,cost,owned,img) {
        this.name = name;
        this.cost = cost;
        this.owned = owned;
        this.img = img;

    };

    /*VARIABLES*/

    let cookieBtn = document.querySelector('.cookie');
    let ownedCookies = 0;
    let ownedCookiesEl = document.getElementById('ownedCookies');
    ownedCookiesEl.innerText = ownedCookies;
    let producers = [];
    let cursor = new Producer('Cursor', 15, 0, 'img/cursor.jpg');
    let grandma = new Producer('Grandma', 100, 0, 'img/grandma.png');
    let farm = new Producer('Farm', 1100, 0, 'img/farm.png');
    let bakery = new Producer('Bakery', 12000, 0, 'img/bakery.png');
    let mine = new Producer('Mine',130000, 0, 'img/mine.png');
    producers.push(cursor,grandma,farm,bakery,mine);




    /*FUNCTIONS*/

    let buyingProducer = function() {

        if(ownedCookies >= this.dataset.cost){
            this.dataset.owned += 1;
            ownedCookies = ownedCookies - this.dataset.cost;
        }
        console.log(this.dataset.cost, this.dataset.owned);

    };

    let buildProducersList = function(argument) {
      let producersList = document.getElementById('producersList');
      let producerEl = document.createElement('li');
      producerEl.dataset.name = argument.name;
      producerEl.dataset.cost = argument.cost;
      producerEl.dataset.owned = argument.owned;
      producerEl.addEventListener('click', buyingProducer);
      let producerImg = document.createElement('div');
      producerImg.classList.add('producerImg');
      producerImg.style.background = 'url' + '(' + argument.img + ') no-repeat center/cover';
      producerEl.innerHTML = '<span>' + producerEl.dataset.name + ' Owned: ' + producerEl.dataset.owned + ' Cost: ' + producerEl.dataset.cost + ' </span>';
      producerEl.appendChild(producerImg);
      producersList.appendChild(producerEl);

    };



    producers.forEach(buildProducersList);

    let bakingCookies = () => {
        ownedCookies ++;
    };


    cookieBtn.addEventListener('click', bakingCookies);



});