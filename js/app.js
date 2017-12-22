document.addEventListener('DOMContentLoaded', () => {



    /*CONSTRUCTOR*/

    let Producer = function(name,cost,owned,img, production, baseCost) {
        this.name = name;
        this.cost = cost;
        this.owned = owned;
        this.img = img;
        this.production = production;
        this.baseCost = baseCost;

    };



    /*VARIABLES*/

    let newGameBtn = document.getElementById('newGame');
    let cookieBtn = document.querySelector('.cookie');
    let ownedCookies = 0;
    let ownedCookiesEl = document.getElementById('ownedCookies');
    ownedCookiesEl.innerText = ownedCookies;
    let cookiesPsec = 0;
    let cookiesPsecEl = document.getElementById('cPs');
    cookiesPsecEl.innerHTML = cookiesPsec;
    let producers = [];
    let cursor = new Producer('Cursor', 15, 0, 'img/cursor.jpg', 0.1, 15);
    let grandma = new Producer('Grandma', 100, 0, 'img/grandma.png', 1, 100);
    let farm = new Producer('Farm', 1100, 0, 'img/farm.png', 8, 1100);
    let bakery = new Producer('Bakery', 12000, 0, 'img/bakery.png', 47, 12000);
    let mine = new Producer('Mine',130000, 0, 'img/mine.png', 260, 130000);
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
                cookiesPsec.toFixed(1);
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
        producerEl.innerHTML = '<span>' + argument.name + ' Production: ' + argument.production + '/s' +  '</span>';
        let ownedEl = document.createElement('span');
        let costEl = document.createElement('span');
        ownedEl.classList.add('owned' + argument.name);
        costEl.classList.add('cost' + argument.name);
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
        ownedCookies.toFixed(0);
        ownedCookiesEl.innerHTML = ownedCookies.toFixed(0);
    };

    setInterval(function () {
        producersBaking();
    },1000);



    cookieBtn.addEventListener('click', bakingCookies);
    
    let newGame = function () {
        ownedCookies = 0;
        ownedCookiesEl.innerHTML = ownedCookies;
        cookiesPsec = 0;
        cookiesPsecEl.innerHTML = cookiesPsec;
        let clearProducers = function (argument) {
            let ownedEl = document.querySelector('.owned' + argument.name);
            let costEl = document.querySelector('.cost' + argument.name);
            argument.owned = 0;
            ownedEl.innerHTML = argument.owned;
            argument.cost = argument.baseCost;
            costEl.innerHTML = argument.cost;

        };
        producers.forEach(clearProducers);
        
    };

    newGameBtn.addEventListener('click', newGame);




    /*INDEXEDDB*/

    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;

    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB.");
    }

    let db;

    let request = window.indexedDB.open('Database',1);

    request.onerror = function(event) {
        alert("You don't give me permission to create a database, why?! :(");
    };
    request.onsuccess = function(event) {
        db = request.result;
        read();

    };

    const tab = [ownedCookiesEl, cookiesPsecEl]

});