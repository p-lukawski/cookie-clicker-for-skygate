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

    var Producer = function Producer(name, cost, owned, img) {
        this.name = name;
        this.cost = cost;
        this.owned = owned;
        this.img = img;
    };

    /*VARIABLES*/

    var cookieBtn = document.querySelector('.cookie');
    var ownedCookies = 0;
    var ownedCookiesEl = document.getElementById('ownedCookies');
    ownedCookiesEl.innerText = ownedCookies;
    var producers = [];
    var cursor = new Producer('Cursor', 15, 0, 'img/cursor.jpg');
    var grandma = new Producer('Grandma', 100, 0, 'img/grandma.png');
    var farm = new Producer('Farm', 1100, 0, 'img/farm.png');
    var bakery = new Producer('Bakery', 12000, 0, 'img/bakery.png');
    var mine = new Producer('Mine', 130000, 0, 'img/mine.png');
    producers.push(cursor, grandma, farm, bakery, mine);

    /*FUNCTIONS*/

    var buyingProducer = function buyingProducer() {

        if (ownedCookies >= this.dataset.cost) {
            this.dataset.owned += 1;
            ownedCookies = ownedCookies - this.dataset.cost;
        }
        console.log(this.dataset.cost, this.dataset.owned);
    };

    var buildProducersList = function buildProducersList(argument) {
        var producersList = document.getElementById('producersList');
        var producerEl = document.createElement('li');
        producerEl.dataset.name = argument.name;
        producerEl.dataset.cost = argument.cost;
        producerEl.dataset.owned = argument.owned;
        producerEl.addEventListener('click', buyingProducer);
        var producerImg = document.createElement('div');
        producerImg.classList.add('producerImg');
        producerImg.style.background = 'url' + '(' + argument.img + ') no-repeat center/cover';
        producerEl.innerHTML = '<span>' + producerEl.dataset.name + ' Owned: ' + producerEl.dataset.owned + ' Cost: ' + producerEl.dataset.cost + ' </span>';
        producerEl.appendChild(producerImg);
        producersList.appendChild(producerEl);
    };

    producers.forEach(buildProducersList);

    var bakingCookies = function bakingCookies() {
        ownedCookies++;
    };

    cookieBtn.addEventListener('click', bakingCookies);
});

/***/ })
/******/ ]);