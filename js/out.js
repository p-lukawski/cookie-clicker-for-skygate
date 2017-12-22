/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.addEventListener('DOMContentLoaded', function () {

    /*CONSTRUCTOR*/

    var Producer = function Producer(name, cost, owned, img, production, baseCost) {
        this.name = name;
        this.cost = cost;
        this.owned = owned;
        this.img = img;
        this.production = production;
        this.baseCost = baseCost;
    };

    /*VARIABLES*/

    var newGameBtn = document.getElementById('newGame');
    var cookieBtn = document.querySelector('.cookie');
    var ownedCookies = 0;
    var ownedCookiesEl = document.getElementById('ownedCookies');
    ownedCookiesEl.innerText = ownedCookies;
    var cookiesPsec = 0;
    var cookiesPsecEl = document.getElementById('cPs');
    cookiesPsecEl.innerHTML = cookiesPsec;
    var producers = [];
    var cursor = new Producer('Cursor', 15, 0, 'img/cursor.jpg', 0.1, 15);
    var grandma = new Producer('Grandma', 100, 0, 'img/grandma.png', 1, 100);
    var farm = new Producer('Farm', 1100, 0, 'img/farm.png', 8, 1100);
    var bakery = new Producer('Bakery', 12000, 0, 'img/bakery.png', 47, 12000);
    var mine = new Producer('Mine', 130000, 0, 'img/mine.png', 260, 130000);
    producers.push(cursor, grandma, farm, bakery, mine);

    /*FUNCTIONS*/

    var buildProducersList = function buildProducersList(argument) {
        var buyingProducer = function buyingProducer() {

            if (ownedCookies >= argument.cost) {
                console.log(argument.cost);
                argument.owned++;
                ownedCookies = ownedCookies - argument.cost;
                ownedCookiesEl.innerHTML = ownedCookies;
                ownedEl.innerHTML++;
                cookiesPsec = cookiesPsec + argument.production;
                cookiesPsec.toFixed(1);
                cookiesPsecEl.innerHTML = cookiesPsec.toFixed(1);
                argument.cost = Math.ceil(argument.cost * 1.15);
                costEl.innerHTML = argument.cost;
                console.log(argument.cost);
            }
        };
        var producersList = document.getElementById('producersList');
        var producerEl = document.createElement('li');
        producerEl.addEventListener('click', buyingProducer);
        var producerImg = document.createElement('div');
        producerImg.classList.add('producerImg');
        producerImg.style.background = 'url' + '(' + argument.img + ') no-repeat center/cover';
        producerEl.innerHTML = '<span>' + argument.name + ' Production: ' + argument.production + '/s' + '</span>';
        var ownedEl = document.createElement('span');
        var costEl = document.createElement('span');
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

    var bakingCookies = function bakingCookies() {
        ownedCookies++;
        ownedCookiesEl.innerHTML++;
    };

    var producersBaking = function producersBaking() {
        ownedCookies = ownedCookies + cookiesPsec;
        ownedCookies.toFixed(0);
        ownedCookiesEl.innerHTML = ownedCookies.toFixed(0);
    };

    setInterval(function () {
        producersBaking();
    }, 1000);

    cookieBtn.addEventListener('click', bakingCookies);

    var newGame = function newGame() {
        ownedCookies = 0;
        ownedCookiesEl.innerHTML = ownedCookies;
        cookiesPsec = 0;
        cookiesPsecEl.innerHTML = cookiesPsec;
        var clearProducers = function clearProducers(argument) {
            var ownedEl = document.querySelector('.owned' + argument.name);
            var costEl = document.querySelector('.cost' + argument.name);
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

    var db = void 0;

    var request = window.indexedDB.open('Database', 1);

    request.onerror = function (event) {
        alert("You don't give me permission to create a database, why?! :(");
    };
    request.onsuccess = function (event) {
        db = request.result;
        read();
    };

    var tab = [ownedCookiesEl, cookiesPsecEl];
});

/***/ })
/******/ ]);