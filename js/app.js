document.addEventListener('DOMContentLoaded', () => {



    /*CONSTRUCTOR*/

    let Producer = function(name,cost,owned,img, production) {
        this.name = name;
        this.cost = cost;
        this.owned = owned;
        this.img = img;
        this.production = production;

    };



    /*VARIABLES*/

    let cookieBtn = document.querySelector('.cookie');
    let ownedCookies = 0;
    let ownedCookiesEl = document.getElementById('ownedCookies');
    ownedCookiesEl.innerText = ownedCookies;
    let cookiesPsec = 0;
    let cookiesPsecEl = document.getElementById('cPs');
    cookiesPsecEl.innerHTML = cookiesPsec;
    let producers = [];
    let cursor = new Producer('Cursor', 15, 0, 'img/cursor.jpg', 0.1);
    let grandma = new Producer('Grandma', 100, 0, 'img/grandma.png', 1);
    let farm = new Producer('Farm', 1100, 0, 'img/farm.png', 8);
    let bakery = new Producer('Bakery', 12000, 0, 'img/bakery.png', 47);
    let mine = new Producer('Mine',130000, 0, 'img/mine.png', 260);
    producers.push(cursor,grandma,farm,bakery,mine);




    /*FUNCTIONS*/


    let buildProducersList = function(argument) {
        let buyingProducer = function() {

            if(ownedCookies >= argument.cost){
                console.log(argument.cost);
                argument.owned ++;
                ownedCookies = ownedCookies - argument.cost;
                ownedCookiesEl.innerHTML = ownedCookies;
                ownedEl.innerHTML ++;
                cookiesPsec = cookiesPsec + argument.production;
                cookiesPsecEl.innerHTML = cookiesPsec.toFixed(1);
                argument.cost = Math.ceil(argument.cost *  1.15);
                costEl.innerHTML = argument.cost;
                console.log(argument.cost)
            }

        };
        let producersList = document.getElementById('producersList');
        let producerEl = document.createElement('li');
        producerEl.addEventListener('click', buyingProducer);
        let producerImg = document.createElement('div');
        producerImg.classList.add('producerImg');
        producerImg.style.background = 'url' + '(' + argument.img + ') no-repeat center/cover';
        producerEl.innerHTML = '<span>' + argument.name + ' Production: ' + argument.production + '</span>';
        let ownedEl = document.createElement('span');
        let costEl = document.createElement('span');
        ownedEl.innerHTML = argument.owned;
        costEl.innerHTML = argument.cost;
        producerEl.appendChild(costEl);
        producerEl.appendChild(ownedEl);
        producerEl.appendChild(producerImg);
        producersList.appendChild(producerEl);

    };

    producers.forEach(buildProducersList);

    let bakingCookies = function(){
        ownedCookies ++;
        ownedCookiesEl.innerHTML ++;
    };
    
    let producersBaking = function () {
        ownedCookies = ownedCookies + cookiesPsec;
        ownedCookiesEl.innerHTML = ownedCookies.toFixed(0);
    };

    setInterval(function () {
        producersBaking();
    },1000);



    cookieBtn.addEventListener('click', bakingCookies);



});