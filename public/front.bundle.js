/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"front": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./public/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/app.js":
/*!***********************!*\
  !*** ./public/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/utils.js */ "./public/modules/utils.js");
/* harmony import */ var _modules_initialization_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/initialization.js */ "./public/modules/initialization.js");
/* harmony import */ var _modules_cart_guestCart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cart/guestCart.js */ "./public/modules/cart/guestCart.js");
/* harmony import */ var _modules_checkout_choiceOfTheWayOfDelivery_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/checkout/choiceOfTheWayOfDelivery.js */ "./public/modules/checkout/choiceOfTheWayOfDelivery.js");
/* harmony import */ var _modules_checkout_getWarehousesNP_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkout/getWarehousesNP.js */ "./public/modules/checkout/getWarehousesNP.js");
/* harmony import */ var _modules_checkout_calculateShippingCost_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/checkout/calculateShippingCost.js */ "./public/modules/checkout/calculateShippingCost.js");




// //localStorage
// import {setStorage, getStorage} from './modules/localStorage.js';
// import {createGuestProfile, getGuestProfile} from './modules/guestProfile.js';

//Cart


//Checkout





Object(_modules_initialization_js__WEBPACK_IMPORTED_MODULE_1__["initializationElems"])(); //ИНИЦИАЛИЗАЦИЯ ЭЛЕМЕНТОВ НА СТРАНИЦЕ
Object(_modules_utils_js__WEBPACK_IMPORTED_MODULE_0__["toDesiredFormat"])(); //Преобразование данных в требуемый формат

//--КОРЗИНА--

const cart = document.getElementById('cart');
     
if(cart) {
    const person = cart.dataset.person;

    if(person === 'user') {
        loadUserCart()
    } else if(person === 'guest') {
        loadGuestCart()
    }
}

async function loadUserCart() {

    const {userChangeTotalPrice, userRemoveProductHandler} = await __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./modules/cart/userCart.js */ "./public/modules/cart/userCart.js"));
    const userChangeQuantity = document.querySelectorAll('.js-userProductQuantity');
    const userRemoveProduct =  document.querySelectorAll('.js-remove-user');
    
    //Изменения количества в корзине для авторизированного пользователя
    userChangeQuantity.forEach( i => i.addEventListener('change', userChangeTotalPrice))

    //Удаление товара из корзины для авторизированного пользователя
    userRemoveProduct.forEach( b => b.addEventListener('click', userRemoveProductHandler))
}

async function loadGuestCart() {
    const {toGuestCart, guestChangeTotalPrice, guestAddToCartHandler, guestRemoveProductHandler} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/cart/guestCart.js */ "./public/modules/cart/guestCart.js"));
    const guestChangeQuantity = document.querySelectorAll('.js-guestProductQuantity');
    const guestRemoveProduct = document.querySelectorAll('.js-remove-guest');

    //Изменения количества в корзине для неавторизированного пользователя
    guestChangeQuantity.forEach( i => i.addEventListener('change', guestChangeTotalPrice))

    //Удаление товара из корзины для неавторизированного пользователя
    guestRemoveProduct.forEach( b => b.addEventListener('click', guestRemoveProductHandler))

}

//Добавление товара в корзину для неавторизированного пользователя
const productCardContainer = document.querySelector('.product-cards');
if(productCardContainer) {
    productCardContainer.addEventListener('click', _modules_cart_guestCart_js__WEBPACK_IMPORTED_MODULE_2__["guestAddToCartHandler"])
} 

//Ссылка на корзину неавторизированного пользователя
const  linkGuestCart = document.querySelectorAll('.js-toGuestCart');
if(linkGuestCart) {
    linkGuestCart.forEach( item => item.addEventListener('click', _modules_cart_guestCart_js__WEBPACK_IMPORTED_MODULE_2__["toGuestCart"]))
}

//--ОФОРМЛЕНИЕ ЗАКАЗА--

const checkout = document.getElementById('checkout');

if(checkout) {

    //Инициализация акардеона для заполнения формы
    const checkoutCollapsibleInstance = Object(_modules_initialization_js__WEBPACK_IMPORTED_MODULE_1__["checkoutCollapsibleInit"])();

    //Валидация первой части формы с контактными данными 
    const checkoutContactValidationBtn = checkout.querySelector('.js-contactValidation');
    checkoutContactValidationBtn.addEventListener('click', () => {
        const id = ['name', 'surname', 'phone', 'email'];
       
        let flag = true;
        
        // Валидация полей
        const contactInputs = id.map( (id) => document.getElementById(`${id}`));
        contactInputs.forEach( input => {
            if(!input.validity.valid) {
                input.classList.add('invalid');
                flag = false
            } 
        })
        if(flag){
            //Открытие второй части формы с информацией о доставке
            controlCollapsible();

            //Выбор способа доставки
            Object(_modules_checkout_choiceOfTheWayOfDelivery_js__WEBPACK_IMPORTED_MODULE_3__["choiceOfTheWayOfDelivery"])();

            //Загрузка списка городов новой почты
            Object(_modules_initialization_js__WEBPACK_IMPORTED_MODULE_1__["citiesAutocompleteInput"])();
        }

        async function controlCollapsible() {
            const {renderShippingForm} = await Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/checkout/renderShippingForm.js */ "./public/modules/checkout/renderShippingForm.js"));
            const shippingBlock = checkout.querySelector('.shipping__wrapper');

            // Смена видимого блока
            shippingBlock.style.display = 'block';
            checkoutCollapsibleInstance.open(1);
            checkoutCollapsibleInstance.close(0);
            renderShippingForm()
        }
    })
}


/***/ }),

/***/ "./public/modules/cart/cartRender.js":
/*!*******************************************!*\
  !*** ./public/modules/cart/cartRender.js ***!
  \*******************************************/
/*! exports provided: cartRender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartRender", function() { return cartRender; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./public/modules/utils.js");


function cartRender(cart, user) {
    const cartTable = document.getElementById('cart');

    if(cart.products.length) {
        const html = cart.products.map( p => {
            return `
            <tr class="cart-product">
                <td class="tcell">
                    <button type="button" class="btn button button_close_small js-remove-${user}" data-id="${p.id}" data-csrf="${cart.csrf}"></button>
                </td>
                <td class="tcell cart__tcell_product">
                    <img src="/images/${p.img[0]}" alt="${p.name}" width="100px">
                    <a href="/products/${p.id}"><h3 class="product__title">${p.name}</h3></a>
                </td>
                
                <td class="cart__tcell_quantity tcell">
                    <input type="number" value="${p.quantity}" data-id="${p.id}" data-csrf="${cart.csrf}" class="js-${user}ProductQuantity quantity" min="1">
                </td>
                <td class="tcell js-product__price cart__tcell_price">
                    <p class="currency product__price">${Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["toCurrency"])(p.price)}</p>
                </td>
            </tr>
            `
        }).join('');
        
        cartTable.querySelector('tbody').innerHTML = html;
        cartTable.querySelector('.js-cart__total').innerHTML = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["toCurrency"])(cart.price);

        // const quantityInputs = document.querySelectorAll(`.js-${user}ProductQuantity`);
       
    } else {
        cartTable.innerHTML = `
            <p>Товаров в корзине пока нет</p>
            <a href="/products" class="link link_accent">Вернуться к покупкам</a>
        `;
    }

    return cartTable;
}  




/***/ }),

/***/ "./public/modules/cart/guestCart.js":
/*!******************************************!*\
  !*** ./public/modules/cart/guestCart.js ***!
  \******************************************/
/*! exports provided: toGuestCart, guestChangeTotalPrice, guestAddToCartHandler, guestRemoveProductHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toGuestCart", function() { return toGuestCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestChangeTotalPrice", function() { return guestChangeTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestAddToCartHandler", function() { return guestAddToCartHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestRemoveProductHandler", function() { return guestRemoveProductHandler; });
/* harmony import */ var _guestProfile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guestProfile.js */ "./public/modules/guestProfile.js");
/* harmony import */ var _cartRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartRender.js */ "./public/modules/cart/cartRender.js");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localStorage.js */ "./public/modules/localStorage.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils.js */ "./public/modules/utils.js");
/* harmony import */ var _mergeCarts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeCarts.js */ "./public/modules/cart/mergeCarts.js");







//Редирект на корзину 
async function toGuestCart(e) {
    e.preventDefault();
    const csrf = this.dataset.csrf,
          guestProfile = await Object(_guestProfile_js__WEBPACK_IMPORTED_MODULE_0__["getGuestProfile"])(csrf),
          token = guestProfile.data.token;

    window.location.replace(`/cart/${token}`)
}

function calculateTotalCost() {
    const cartTable = document.getElementById('cart');
    const products = [...document.querySelectorAll('.cart-product')];

    const total = products.reduce( (total, product) => {
        const priceElem = product.querySelector('.js-product__price>.product__price');
        const price = parseFloat(priceElem.innerHTML);
        const quantity = product.querySelector('.js-guestProductQuantity').value;

        return total += +price * +quantity
    }, 0)
    cartTable.querySelector('.js-cart__total').innerHTML = Object(_utils_js__WEBPACK_IMPORTED_MODULE_3__["toCurrency"])(total);
}


//Пересчет и сохранение общей стоимости корзины
function guestChangeTotalPrice(e) {
    const guestProfile = Object(_localStorage_js__WEBPACK_IMPORTED_MODULE_2__["getStorage"])('guestProfile');
    const csrf = e.target.dataset.csrf;

    //Обновление localStorage
    const id = e.target.dataset.id;
    const product = guestProfile.data.products.find( p => p.id.toString() === id.toString());
    product.quantity = +e.target.value;
    Object(_localStorage_js__WEBPACK_IMPORTED_MODULE_2__["setStorage"])('guestProfile', guestProfile)

    //Обновление данных локально
    fetch('/cart/update/' + guestProfile.data.token, {
        method: 'post',
        headers: {
            'X-XSRF-TOKEN': csrf,
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(guestProfile)
    }).then(res => console.log(res.status))

    calculateTotalCost()
}

//Создание корзины и добавление товаров
async function guestAddToCartHandler(e) {
    try {
        if(e.target.classList.contains('js-addToCart')) {

            const id = e.target.dataset.id,
                  quantity = e.target.nextElementSibling.value,
                  csrf = e.target.dataset.csrf;

            const guestProfile = await Object(_guestProfile_js__WEBPACK_IMPORTED_MODULE_0__["getGuestProfile"])(csrf);

            //Добавление изменений в корзину + сохранение ее на клиенте
            const guestProfileAfterChanges = await fetch('/cart/add/' + guestProfile.data.token, {
                method: 'post',
                headers: {
                    'X-XSRF-TOKEN': csrf,
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify({
                    guestProfile,
                    id,
                    quantity
                })
            })
            .then(res => res.json())
            .then(product => {
                guestProfile.data.products = Object(_mergeCarts_js__WEBPACK_IMPORTED_MODULE_4__["mergeCarts"])(guestProfile.data.products, product)
                Object(_localStorage_js__WEBPACK_IMPORTED_MODULE_2__["setStorage"])('guestProfile', guestProfile)
                return guestProfile
            })
            
            //Сохранение корзины локально + редирект на корзину
            const guestProfileSavedLocally = fetch('/cart/update/' + guestProfile.data.token, {
                method: 'post',
                headers: {
                    'X-XSRF-TOKEN': csrf,
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(guestProfileAfterChanges)
            })
            .then(res => window.location.replace(`/cart/${guestProfile.data.token}`))
        }
     } catch(err) {
        console.log(err)
    }
}

//Удаление товара из корзины
async function guestRemoveProductHandler(e) {
    const id = e.target.dataset.id,
          csrf = e.target.dataset.csrf;
    const guestProfile = await Object(_guestProfile_js__WEBPACK_IMPORTED_MODULE_0__["getGuestProfile"])(csrf);
    guestProfile.data.products = guestProfile.data.products.filter( p => p.id.toString() !== id.toString() )
    Object(_localStorage_js__WEBPACK_IMPORTED_MODULE_2__["setStorage"])('guestProfile', guestProfile)

    fetch(`/cart/remove/${guestProfile.data.token}/${id}`, {
        method: 'post',
        headers: {
            'X-XSRF-TOKEN': csrf,
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(guestProfile)
    })
    .then(res => res.json())
    .then(cart => Object(_cartRender_js__WEBPACK_IMPORTED_MODULE_1__["cartRender"])(cart, 'guest'))
    .then(cartTable => {
        if(cartTable.querySelector('.cart-product')) {
            const guestChangeQuantity = document.querySelectorAll('.js-guestProductQuantity'),
                    guestRemoveProduct = document.querySelectorAll('.js-remove-guest');

            guestChangeQuantity.forEach( q => q.addEventListener('change', guestChangeTotalPrice));
            guestRemoveProduct.forEach( b => b.addEventListener('click', guestRemoveProductHandler))
        }
    })
}




/***/ }),

/***/ "./public/modules/cart/mergeCarts.js":
/*!*******************************************!*\
  !*** ./public/modules/cart/mergeCarts.js ***!
  \*******************************************/
/*! exports provided: mergeCarts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeCarts", function() { return mergeCarts; });
function mergeCarts(products, addProduct) {
    const inCart = products.find(p => p.id.toString() === addProduct.id.toString() );
    if(inCart) {
        inCart.quantity = +inCart.quantity + +addProduct.quantity;
    } else {
        products.push(addProduct)
    }
    return products
}


/***/ }),

/***/ "./public/modules/checkout/calculateShippingCost.js":
/*!**********************************************************!*\
  !*** ./public/modules/checkout/calculateShippingCost.js ***!
  \**********************************************************/
/*! exports provided: calculateShippingCost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateShippingCost", function() { return calculateShippingCost; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./public/modules/utils.js");



//Подстчет стоимости доставки

function calculateShippingCost() {
    try{
        const checkoutForm = document.forms.checkout;
        const shippingOptions = [...checkoutForm.elements.shipping];
        const payment = checkoutForm.elements.payment.value;
        const city = document.querySelector('.js-citiesAutocomplete').value;
        const cartTotal = parseFloat(document.querySelector('.js-checkout__cart-total').innerHTML);
        const checkedOption = shippingOptions.find( option => option.checked === true);
        const checkedOptionName = checkedOption.id;
        const csrf = document.getElementById('csrf').value;
        console.log(city, payment, cartTotal, checkedOptionName)
        
        if(city && payment && cartTotal && checkedOptionName) {
            fetch('/checkout/calculate', {
                method: 'POST',
                headers: {
                    'X-XSRF-TOKEN': csrf, 
                    'Content-Type': 'application/json; charset=utf-8'
                    },
                body: JSON.stringify({
                    city, payment, cartTotal, checkedOptionName
                })
            })
            .then(res => res.json())
            .then(obj => {
                const totalContainer = document.querySelector('.js-checkout__total');
                const deliveryCostContainer = document.querySelector('.js-checkout__deliveryCost');
                const deliveryCost = obj.data[0].Cost;
                const total = deliveryCost + obj.data[0].AssessedCost;

                totalContainer.innerHTML = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["toCurrency"])(total);
                deliveryCostContainer.innerHTML = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["toCurrency"])(deliveryCost);
            })
            .catch(err => console.log(err))
        }
    } catch(err) {
        console.log(err)
    }
}



/***/ }),

/***/ "./public/modules/checkout/choiceOfTheWayOfDelivery.js":
/*!*************************************************************!*\
  !*** ./public/modules/checkout/choiceOfTheWayOfDelivery.js ***!
  \*************************************************************/
/*! exports provided: choiceOfTheWayOfDelivery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choiceOfTheWayOfDelivery", function() { return choiceOfTheWayOfDelivery; });
/* harmony import */ var _renderShippingForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderShippingForm.js */ "./public/modules/checkout/renderShippingForm.js");


//Выбор способа доставки    
function choiceOfTheWayOfDelivery() {
    const npDepartment = document.getElementById('npDepartment');
    const npAddress = document.getElementById('npAddress');
    const ukrposhta = document.getElementById('ukrposhta');
    
    npDepartment.addEventListener('change', _renderShippingForm_js__WEBPACK_IMPORTED_MODULE_0__["renderShippingForm"]);
    npAddress.addEventListener('change', _renderShippingForm_js__WEBPACK_IMPORTED_MODULE_0__["renderShippingForm"]);
    ukrposhta.addEventListener('change', _renderShippingForm_js__WEBPACK_IMPORTED_MODULE_0__["renderShippingForm"]);
}



/***/ }),

/***/ "./public/modules/checkout/getWarehousesNP.js":
/*!****************************************************!*\
  !*** ./public/modules/checkout/getWarehousesNP.js ***!
  \****************************************************/
/*! exports provided: getWarehousesNP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWarehousesNP", function() { return getWarehousesNP; });
/* harmony import */ var _calculateShippingCost_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateShippingCost.js */ "./public/modules/checkout/calculateShippingCost.js");


function getWarehousesNP() {
    const container = document.querySelector('.js-npWarehouses');
    container.innerHTML = '';
    const csrf = document.getElementById('csrf').value;
    const citiesInput = document.querySelector('.js-citiesAutocomplete');
    const selectedCity = citiesInput.value;
    Object(_calculateShippingCost_js__WEBPACK_IMPORTED_MODULE_0__["calculateShippingCost"])()

    fetch('/checkout/shipping', {
    method: 'POST',
    headers: {
        'X-XSRF-TOKEN': csrf, 
        'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({ selectedCity })
    })
    .then(res => res.json())
    .then(warehouses => {
        if(warehouses.length === 0) container.insertAdjacentHTML('beforeend', `<option disabled selected>Отделение не работает</option>`)
        warehouses.forEach( item => {
        container.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`)
        })
    })
}



/***/ }),

/***/ "./public/modules/checkout/renderShippingForm.js":
/*!*******************************************************!*\
  !*** ./public/modules/checkout/renderShippingForm.js ***!
  \*******************************************************/
/*! exports provided: renderShippingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderShippingForm", function() { return renderShippingForm; });
/* harmony import */ var _calculateShippingCost_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calculateShippingCost.js */ "./public/modules/checkout/calculateShippingCost.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ "./public/modules/utils.js");



//Поля для заполнения для конкретного вида доставки
const shippingInputs = {
    npDepartment: ['department'],
    npAddress: ['locality', 'street', 'apartment'],
    ukrposhta: ['locality', 'postal-code'],
}

const checkoutForm = document.forms.checkout;

//Рендер требуемых полей для адреса

function renderShippingForm() {
    const shippingOptions = [...checkoutForm.elements.shipping],
          checkedOption =  shippingOptions.find( option => option.checked === true),
          checkedOptionName = checkedOption.value,
          renderInputsId = shippingInputs[checkedOptionName],
          container = document.querySelector('.form-fragment');
    const renderInputs = renderInputsId.map( id => document.querySelector(`[data-shipping=${id}]`));
    const renderInputsClones = renderInputs.map( input => {
        const clone = input.cloneNode(true);
        clone.querySelector('.js-required').required = true;
        return clone
    });
    container.innerHTML = '';
    renderInputsClones.forEach( input => container.append(input))

    if(checkedOptionName === 'ukrposhta') {
        const totalContainer = document.querySelector('.js-checkout__total');
        const deliveryCostContainer = document.querySelector('.js-checkout__deliveryCost');
        const cartTotal = parseFloat(document.querySelector('.js-checkout__cart-total').innerHTML);
        const deliveryCost = 35;
        const total = deliveryCost + cartTotal;

        totalContainer.innerHTML = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCurrency"])(total);
        deliveryCostContainer.innerHTML = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["toCurrency"])(deliveryCost);
    } else {
        Object(_calculateShippingCost_js__WEBPACK_IMPORTED_MODULE_0__["calculateShippingCost"])();
    }
    
}



/***/ }),

/***/ "./public/modules/guestProfile.js":
/*!****************************************!*\
  !*** ./public/modules/guestProfile.js ***!
  \****************************************/
/*! exports provided: createGuestProfile, getGuestProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGuestProfile", function() { return createGuestProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGuestProfile", function() { return getGuestProfile; });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./public/modules/localStorage.js");


async function createGuestProfile(csrf) {
    return fetch("/cart/create-token", {
        method: 'post',
        headers: {
            'X-XSRF-TOKEN': csrf,
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(res => res.json())
    .then(profile => Object(_localStorage_js__WEBPACK_IMPORTED_MODULE_0__["setStorage"])('guestProfile', profile))
}

function getGuestProfile(csrf) {
    return Object(_localStorage_js__WEBPACK_IMPORTED_MODULE_0__["getStorage"])('guestProfile') ? Object(_localStorage_js__WEBPACK_IMPORTED_MODULE_0__["getStorage"])('guestProfile') : createGuestProfile(csrf)
}



/***/ }),

/***/ "./public/modules/initialization.js":
/*!******************************************!*\
  !*** ./public/modules/initialization.js ***!
  \******************************************/
/*! exports provided: initializationElems, checkoutCollapsibleInit, citiesAutocompleteInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializationElems", function() { return initializationElems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkoutCollapsibleInit", function() { return checkoutCollapsibleInit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "citiesAutocompleteInput", function() { return citiesAutocompleteInput; });
/* harmony import */ var _checkout_getWarehousesNP_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout/getWarehousesNP.js */ "./public/modules/checkout/getWarehousesNP.js");


//ИНИЦИАЛИЗАЦИЯ ЭЛЕМЕНТОВ НА СТРАНИЦЕ
function initializationElems() {
    M.AutoInit();

    if(document.querySelector('.glide')) {
    
        let glide = new Glide('.glide', {
            type: 'carousel',
            perView: 4,
            focusAt: 'center',
            breakpoints: {
              800: {
                perView: 2
              },
              480: {
                perView: 1
              }
            }
          })
          
          glide.mount()
    }    
}

// Инициализация аккордеона и его типа

function checkoutCollapsibleInit() {
  const checkout = document.getElementById('checkout');
  const checkoutCollapsible = checkout.querySelector('.checkout__collapsible');
  const checkoutCollapsibleInit = M.Collapsible.init(checkoutCollapsible, {
        accordion: false
    });
  const checkoutCollapsibleInstance = M.Collapsible.getInstance(checkoutCollapsible);

  return checkoutCollapsibleInstance;
}

function citiesAutocompleteInput() {
    const csrf = document.getElementById('csrf').value;
    let citiesInput, initializationCitiesInput;
    let citiesAutocompleteOptions = {
        minLength: 2,
        onAutocomplete: _checkout_getWarehousesNP_js__WEBPACK_IMPORTED_MODULE_0__["getWarehousesNP"]
    }; 
    fetch('/checkout', {
        method: 'post',
        headers: {
            'X-XSRF-TOKEN': csrf, 
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(res => res.json())
    .then(options => {
        citiesAutocompleteOptions.data = JSON.parse(options)
        citiesInput = document.querySelector('.js-citiesAutocomplete');
        initializationCitiesInput = M.Autocomplete.init(citiesInput, citiesAutocompleteOptions);
    })
    .catch(err => console.log(err))
}





/***/ }),

/***/ "./public/modules/localStorage.js":
/*!****************************************!*\
  !*** ./public/modules/localStorage.js ***!
  \****************************************/
/*! exports provided: setStorage, getStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStorage", function() { return setStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStorage", function() { return getStorage; });
//ДОСТУП К ЛОКАЛЬНОМУ ХРАНИЛИЩУ

function setStorage(key, info) {
    window.localStorage.setItem(key, JSON.stringify(info));
    return getStorage(key)
}

function getStorage(key) {
    let item = window.localStorage.getItem(key);
    return JSON.parse(item)
}



/***/ }),

/***/ "./public/modules/utils.js":
/*!*********************************!*\
  !*** ./public/modules/utils.js ***!
  \*********************************/
/*! exports provided: toCurrency, toDate, toDesiredFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCurrency", function() { return toCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDate", function() { return toDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDesiredFormat", function() { return toDesiredFormat; });
//Чисела в валюту
function toCurrency(num) {
    return new Intl.NumberFormat ('ua-UA', {
        currency: 'uah',
        style: 'currency'
    }).format(num)
}

//Настройка отображения даты
function toDate(date) {
    return new Intl.DateTimeFormat('ua-UA', {
        day: '2-digit',
        month: 'long',
        yaer: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(date))
}

function toDesiredFormat() {
    document.querySelectorAll('.currency').forEach( value => {
        const price = parseFloat(value.textContent);
        value.textContent = toCurrency(price)
    })
    
    document.querySelectorAll('.orders__date').forEach( node => {
        node.textContent = toDate(node.textContent)
    })
}



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbW9kdWxlcy9jYXJ0L2NhcnRSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvY2FydC9ndWVzdENhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvY2FydC9tZXJnZUNhcnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tb2R1bGVzL2NoZWNrb3V0L2NhbGN1bGF0ZVNoaXBwaW5nQ29zdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbW9kdWxlcy9jaGVja291dC9jaG9pY2VPZlRoZVdheU9mRGVsaXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvY2hlY2tvdXQvZ2V0V2FyZWhvdXNlc05QLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tb2R1bGVzL2NoZWNrb3V0L3JlbmRlclNoaXBwaW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbW9kdWxlcy9ndWVzdFByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvaW5pdGlhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tb2R1bGVzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EsMENBQTBDO1FBQzFDOztRQUVB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QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wiLCJmaWxlIjoiZnJvbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJmcm9udFwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gb24gZXJyb3IgZnVuY3Rpb24gZm9yIGFzeW5jIGxvYWRpbmdcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHsgY29uc29sZS5lcnJvcihlcnIpOyB0aHJvdyBlcnI7IH07XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wdWJsaWMvYXBwLmpzXCIpO1xuIiwiXHJcbmltcG9ydCB7dG9DdXJyZW5jeSwgdG9EYXRlLCB0b0Rlc2lyZWRGb3JtYXR9IGZyb20gJy4vbW9kdWxlcy91dGlscy5qcyc7XHJcbmltcG9ydCB7aW5pdGlhbGl6YXRpb25FbGVtc30gZnJvbSAnLi9tb2R1bGVzL2luaXRpYWxpemF0aW9uLmpzJztcclxuXHJcbi8vIC8vbG9jYWxTdG9yYWdlXHJcbi8vIGltcG9ydCB7c2V0U3RvcmFnZSwgZ2V0U3RvcmFnZX0gZnJvbSAnLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyc7XHJcbi8vIGltcG9ydCB7Y3JlYXRlR3Vlc3RQcm9maWxlLCBnZXRHdWVzdFByb2ZpbGV9IGZyb20gJy4vbW9kdWxlcy9ndWVzdFByb2ZpbGUuanMnO1xyXG5cclxuLy9DYXJ0XHJcbmltcG9ydCB7dG9HdWVzdENhcnQsIGd1ZXN0QWRkVG9DYXJ0SGFuZGxlcn0gZnJvbSAnLi9tb2R1bGVzL2NhcnQvZ3Vlc3RDYXJ0LmpzJztcclxuXHJcbi8vQ2hlY2tvdXRcclxuaW1wb3J0IHtjaG9pY2VPZlRoZVdheU9mRGVsaXZlcnl9IGZyb20gJy4vbW9kdWxlcy9jaGVja291dC9jaG9pY2VPZlRoZVdheU9mRGVsaXZlcnkuanMnO1xyXG5pbXBvcnQge2dldFdhcmVob3VzZXNOUH0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrb3V0L2dldFdhcmVob3VzZXNOUC5qcyc7XHJcbmltcG9ydCB7Y2hlY2tvdXRDb2xsYXBzaWJsZUluaXQsIGNpdGllc0F1dG9jb21wbGV0ZUlucHV0fSBmcm9tICcuL21vZHVsZXMvaW5pdGlhbGl6YXRpb24uanMnO1xyXG5pbXBvcnQge2NhbGN1bGF0ZVNoaXBwaW5nQ29zdH0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrb3V0L2NhbGN1bGF0ZVNoaXBwaW5nQ29zdC5qcyc7XHJcblxyXG5pbml0aWFsaXphdGlvbkVsZW1zKCk7IC8v0JjQndCY0KbQmNCQ0JvQmNCX0JDQptCY0K8g0K3Qm9CV0JzQldCd0KLQntCSINCd0JAg0KHQotCg0JDQndCY0KbQlVxyXG50b0Rlc2lyZWRGb3JtYXQoKTsgLy/Qn9GA0LXQvtCx0YDQsNC30L7QstCw0L3QuNC1INC00LDQvdC90YvRhSDQsiDRgtGA0LXQsdGD0LXQvNGL0Lkg0YTQvtGA0LzQsNGCXHJcblxyXG4vLy0t0JrQntCg0JfQmNCd0JAtLVxyXG5cclxuY29uc3QgY2FydCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0Jyk7XHJcbiAgICAgXHJcbmlmKGNhcnQpIHtcclxuICAgIGNvbnN0IHBlcnNvbiA9IGNhcnQuZGF0YXNldC5wZXJzb247XHJcblxyXG4gICAgaWYocGVyc29uID09PSAndXNlcicpIHtcclxuICAgICAgICBsb2FkVXNlckNhcnQoKVxyXG4gICAgfSBlbHNlIGlmKHBlcnNvbiA9PT0gJ2d1ZXN0Jykge1xyXG4gICAgICAgIGxvYWRHdWVzdENhcnQoKVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkVXNlckNhcnQoKSB7XHJcblxyXG4gICAgY29uc3Qge3VzZXJDaGFuZ2VUb3RhbFByaWNlLCB1c2VyUmVtb3ZlUHJvZHVjdEhhbmRsZXJ9ID0gYXdhaXQgaW1wb3J0KCcuL21vZHVsZXMvY2FydC91c2VyQ2FydC5qcycpO1xyXG4gICAgY29uc3QgdXNlckNoYW5nZVF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXVzZXJQcm9kdWN0UXVhbnRpdHknKTtcclxuICAgIGNvbnN0IHVzZXJSZW1vdmVQcm9kdWN0ID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1yZW1vdmUtdXNlcicpO1xyXG4gICAgXHJcbiAgICAvL9CY0LfQvNC10L3QtdC90LjRjyDQutC+0LvQuNGH0LXRgdGC0LLQsCDQsiDQutC+0YDQt9C40L3QtSDQtNC70Y8g0LDQstGC0L7RgNC40LfQuNGA0L7QstCw0L3QvdC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIHVzZXJDaGFuZ2VRdWFudGl0eS5mb3JFYWNoKCBpID0+IGkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXNlckNoYW5nZVRvdGFsUHJpY2UpKVxyXG5cclxuICAgIC8v0KPQtNCw0LvQtdC90LjQtSDRgtC+0LLQsNGA0LAg0LjQtyDQutC+0YDQt9C40L3RiyDQtNC70Y8g0LDQstGC0L7RgNC40LfQuNGA0L7QstCw0L3QvdC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuICAgIHVzZXJSZW1vdmVQcm9kdWN0LmZvckVhY2goIGIgPT4gYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVzZXJSZW1vdmVQcm9kdWN0SGFuZGxlcikpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRHdWVzdENhcnQoKSB7XHJcbiAgICBjb25zdCB7dG9HdWVzdENhcnQsIGd1ZXN0Q2hhbmdlVG90YWxQcmljZSwgZ3Vlc3RBZGRUb0NhcnRIYW5kbGVyLCBndWVzdFJlbW92ZVByb2R1Y3RIYW5kbGVyfSA9IGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2NhcnQvZ3Vlc3RDYXJ0LmpzJyk7XHJcbiAgICBjb25zdCBndWVzdENoYW5nZVF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWd1ZXN0UHJvZHVjdFF1YW50aXR5Jyk7XHJcbiAgICBjb25zdCBndWVzdFJlbW92ZVByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcmVtb3ZlLWd1ZXN0Jyk7XHJcblxyXG4gICAgLy/QmNC30LzQtdC90LXQvdC40Y8g0LrQvtC70LjRh9C10YHRgtCy0LAg0LIg0LrQvtGA0LfQuNC90LUg0LTQu9GPINC90LXQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgZ3Vlc3RDaGFuZ2VRdWFudGl0eS5mb3JFYWNoKCBpID0+IGkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZ3Vlc3RDaGFuZ2VUb3RhbFByaWNlKSlcclxuXHJcbiAgICAvL9Cj0LTQsNC70LXQvdC40LUg0YLQvtCy0LDRgNCwINC40Lcg0LrQvtGA0LfQuNC90Ysg0LTQu9GPINC90LXQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgZ3Vlc3RSZW1vdmVQcm9kdWN0LmZvckVhY2goIGIgPT4gYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGd1ZXN0UmVtb3ZlUHJvZHVjdEhhbmRsZXIpKVxyXG5cclxufVxyXG5cclxuLy/QlNC+0LHQsNCy0LvQtdC90LjQtSDRgtC+0LLQsNGA0LAg0LIg0LrQvtGA0LfQuNC90YMg0LTQu9GPINC90LXQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG5jb25zdCBwcm9kdWN0Q2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWNhcmRzJyk7XHJcbmlmKHByb2R1Y3RDYXJkQ29udGFpbmVyKSB7XHJcbiAgICBwcm9kdWN0Q2FyZENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGd1ZXN0QWRkVG9DYXJ0SGFuZGxlcilcclxufSBcclxuXHJcbi8v0KHRgdGL0LvQutCwINC90LAg0LrQvtGA0LfQuNC90YMg0L3QtdCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNC90L3QvtCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbmNvbnN0ICBsaW5rR3Vlc3RDYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXRvR3Vlc3RDYXJ0Jyk7XHJcbmlmKGxpbmtHdWVzdENhcnQpIHtcclxuICAgIGxpbmtHdWVzdENhcnQuZm9yRWFjaCggaXRlbSA9PiBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9HdWVzdENhcnQpKVxyXG59XHJcblxyXG4vLy0t0J7QpNCe0KDQnNCb0JXQndCY0JUg0JfQkNCa0JDQl9CQLS1cclxuXHJcbmNvbnN0IGNoZWNrb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrb3V0Jyk7XHJcblxyXG5pZihjaGVja291dCkge1xyXG5cclxuICAgIC8v0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LDQutCw0YDQtNC10L7QvdCwINC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyDRhNC+0YDQvNGLXHJcbiAgICBjb25zdCBjaGVja291dENvbGxhcHNpYmxlSW5zdGFuY2UgPSBjaGVja291dENvbGxhcHNpYmxlSW5pdCgpO1xyXG5cclxuICAgIC8v0JLQsNC70LjQtNCw0YbQuNGPINC/0LXRgNCy0L7QuSDRh9Cw0YHRgtC4INGE0L7RgNC80Ysg0YEg0LrQvtC90YLQsNC60YLQvdGL0LzQuCDQtNCw0L3QvdGL0LzQuCBcclxuICAgIGNvbnN0IGNoZWNrb3V0Q29udGFjdFZhbGlkYXRpb25CdG4gPSBjaGVja291dC5xdWVyeVNlbGVjdG9yKCcuanMtY29udGFjdFZhbGlkYXRpb24nKTtcclxuICAgIGNoZWNrb3V0Q29udGFjdFZhbGlkYXRpb25CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBbJ25hbWUnLCAnc3VybmFtZScsICdwaG9uZScsICdlbWFpbCddO1xyXG4gICAgICAgXHJcbiAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vINCS0LDQu9C40LTQsNGG0LjRjyDQv9C+0LvQtdC5XHJcbiAgICAgICAgY29uc3QgY29udGFjdElucHV0cyA9IGlkLm1hcCggKGlkKSA9PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpZH1gKSk7XHJcbiAgICAgICAgY29udGFjdElucHV0cy5mb3JFYWNoKCBpbnB1dCA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFpbnB1dC52YWxpZGl0eS52YWxpZCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZihmbGFnKXtcclxuICAgICAgICAgICAgLy/QntGC0LrRgNGL0YLQuNC1INCy0YLQvtGA0L7QuSDRh9Cw0YHRgtC4INGE0L7RgNC80Ysg0YEg0LjQvdGE0L7RgNC80LDRhtC40LXQuSDQviDQtNC+0YHRgtCw0LLQutC1XHJcbiAgICAgICAgICAgIGNvbnRyb2xDb2xsYXBzaWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgLy/QktGL0LHQvtGAINGB0L/QvtGB0L7QsdCwINC00L7RgdGC0LDQstC60LhcclxuICAgICAgICAgICAgY2hvaWNlT2ZUaGVXYXlPZkRlbGl2ZXJ5KCk7XHJcblxyXG4gICAgICAgICAgICAvL9CX0LDQs9GA0YPQt9C60LAg0YHQv9C40YHQutCwINCz0L7RgNC+0LTQvtCyINC90L7QstC+0Lkg0L/QvtGH0YLRi1xyXG4gICAgICAgICAgICBjaXRpZXNBdXRvY29tcGxldGVJbnB1dCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gY29udHJvbENvbGxhcHNpYmxlKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7cmVuZGVyU2hpcHBpbmdGb3JtfSA9IGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2NoZWNrb3V0L3JlbmRlclNoaXBwaW5nRm9ybS5qcycpO1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwcGluZ0Jsb2NrID0gY2hlY2tvdXQucXVlcnlTZWxlY3RvcignLnNoaXBwaW5nX193cmFwcGVyJyk7XHJcblxyXG4gICAgICAgICAgICAvLyDQodC80LXQvdCwINCy0LjQtNC40LzQvtCz0L4g0LHQu9C+0LrQsFxyXG4gICAgICAgICAgICBzaGlwcGluZ0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBjaGVja291dENvbGxhcHNpYmxlSW5zdGFuY2Uub3BlbigxKTtcclxuICAgICAgICAgICAgY2hlY2tvdXRDb2xsYXBzaWJsZUluc3RhbmNlLmNsb3NlKDApO1xyXG4gICAgICAgICAgICByZW5kZXJTaGlwcGluZ0Zvcm0oKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IHt0b0N1cnJlbmN5LCB0b0RhdGUsIHRvRGVzaXJlZEZvcm1hdH0gZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5cclxuZnVuY3Rpb24gY2FydFJlbmRlcihjYXJ0LCB1c2VyKSB7XHJcbiAgICBjb25zdCBjYXJ0VGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydCcpO1xyXG5cclxuICAgIGlmKGNhcnQucHJvZHVjdHMubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgaHRtbCA9IGNhcnQucHJvZHVjdHMubWFwKCBwID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwiY2FydC1wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Y2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ1dHRvbiBidXR0b25fY2xvc2Vfc21hbGwganMtcmVtb3ZlLSR7dXNlcn1cIiBkYXRhLWlkPVwiJHtwLmlkfVwiIGRhdGEtY3NyZj1cIiR7Y2FydC5jc3JmfVwiPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRjZWxsIGNhcnRfX3RjZWxsX3Byb2R1Y3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvJHtwLmltZ1swXX1cIiBhbHQ9XCIke3AubmFtZX1cIiB3aWR0aD1cIjEwMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9kdWN0cy8ke3AuaWR9XCI+PGgzIGNsYXNzPVwicHJvZHVjdF9fdGl0bGVcIj4ke3AubmFtZX08L2gzPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImNhcnRfX3RjZWxsX3F1YW50aXR5IHRjZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT1cIiR7cC5xdWFudGl0eX1cIiBkYXRhLWlkPVwiJHtwLmlkfVwiIGRhdGEtY3NyZj1cIiR7Y2FydC5jc3JmfVwiIGNsYXNzPVwianMtJHt1c2VyfVByb2R1Y3RRdWFudGl0eSBxdWFudGl0eVwiIG1pbj1cIjFcIj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Y2VsbCBqcy1wcm9kdWN0X19wcmljZSBjYXJ0X190Y2VsbF9wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY3VycmVuY3kgcHJvZHVjdF9fcHJpY2VcIj4ke3RvQ3VycmVuY3kocC5wcmljZSl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH0pLmpvaW4oJycpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhcnRUYWJsZS5xdWVyeVNlbGVjdG9yKCd0Ym9keScpLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgY2FydFRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jYXJ0X190b3RhbCcpLmlubmVySFRNTCA9IHRvQ3VycmVuY3koY2FydC5wcmljZSk7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IHF1YW50aXR5SW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmpzLSR7dXNlcn1Qcm9kdWN0UXVhbnRpdHlgKTtcclxuICAgICAgIFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjYXJ0VGFibGUuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8cD7QotC+0LLQsNGA0L7QsiDQsiDQutC+0YDQt9C40L3QtSDQv9C+0LrQsCDQvdC10YI8L3A+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZHVjdHNcIiBjbGFzcz1cImxpbmsgbGlua19hY2NlbnRcIj7QktC10YDQvdGD0YLRjNGB0Y8g0Log0L/QvtC60YPQv9C60LDQvDwvYT5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjYXJ0VGFibGU7XHJcbn0gIFxyXG5cclxuXHJcbmV4cG9ydCB7Y2FydFJlbmRlcn0iLCJpbXBvcnQge2NyZWF0ZUd1ZXN0UHJvZmlsZSwgZ2V0R3Vlc3RQcm9maWxlfSBmcm9tICcuLi9ndWVzdFByb2ZpbGUuanMnO1xyXG5pbXBvcnQge2NhcnRSZW5kZXJ9IGZyb20gJy4vY2FydFJlbmRlci5qcyc7XHJcbmltcG9ydCB7c2V0U3RvcmFnZSwgZ2V0U3RvcmFnZX0gZnJvbSAnLi4vbG9jYWxTdG9yYWdlLmpzJztcclxuaW1wb3J0IHt0b0N1cnJlbmN5LCB0b0RhdGUsIHRvRGVzaXJlZEZvcm1hdH0gZnJvbSAnLi4vdXRpbHMuanMnO1xyXG5pbXBvcnQge21lcmdlQ2FydHN9IGZyb20gJy4vbWVyZ2VDYXJ0cy5qcyc7XHJcblxyXG5cclxuLy/QoNC10LTQuNGA0LXQutGCINC90LAg0LrQvtGA0LfQuNC90YMgXHJcbmFzeW5jIGZ1bmN0aW9uIHRvR3Vlc3RDYXJ0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNzcmYgPSB0aGlzLmRhdGFzZXQuY3NyZixcclxuICAgICAgICAgIGd1ZXN0UHJvZmlsZSA9IGF3YWl0IGdldEd1ZXN0UHJvZmlsZShjc3JmKSxcclxuICAgICAgICAgIHRva2VuID0gZ3Vlc3RQcm9maWxlLmRhdGEudG9rZW47XHJcblxyXG4gICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9jYXJ0LyR7dG9rZW59YClcclxufVxyXG5cclxuZnVuY3Rpb24gY2FsY3VsYXRlVG90YWxDb3N0KCkge1xyXG4gICAgY29uc3QgY2FydFRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQnKTtcclxuICAgIGNvbnN0IHByb2R1Y3RzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJ0LXByb2R1Y3QnKV07XHJcblxyXG4gICAgY29uc3QgdG90YWwgPSBwcm9kdWN0cy5yZWR1Y2UoICh0b3RhbCwgcHJvZHVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaWNlRWxlbSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmpzLXByb2R1Y3RfX3ByaWNlPi5wcm9kdWN0X19wcmljZScpO1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gcGFyc2VGbG9hdChwcmljZUVsZW0uaW5uZXJIVE1MKTtcclxuICAgICAgICBjb25zdCBxdWFudGl0eSA9IHByb2R1Y3QucXVlcnlTZWxlY3RvcignLmpzLWd1ZXN0UHJvZHVjdFF1YW50aXR5JykudmFsdWU7XHJcblxyXG4gICAgICAgIHJldHVybiB0b3RhbCArPSArcHJpY2UgKiArcXVhbnRpdHlcclxuICAgIH0sIDApXHJcbiAgICBjYXJ0VGFibGUucXVlcnlTZWxlY3RvcignLmpzLWNhcnRfX3RvdGFsJykuaW5uZXJIVE1MID0gdG9DdXJyZW5jeSh0b3RhbCk7XHJcbn1cclxuXHJcblxyXG4vL9Cf0LXRgNC10YHRh9C10YIg0Lgg0YHQvtGF0YDQsNC90LXQvdC40LUg0L7QsdGJ0LXQuSDRgdGC0L7QuNC80L7RgdGC0Lgg0LrQvtGA0LfQuNC90YtcclxuZnVuY3Rpb24gZ3Vlc3RDaGFuZ2VUb3RhbFByaWNlKGUpIHtcclxuICAgIGNvbnN0IGd1ZXN0UHJvZmlsZSA9IGdldFN0b3JhZ2UoJ2d1ZXN0UHJvZmlsZScpO1xyXG4gICAgY29uc3QgY3NyZiA9IGUudGFyZ2V0LmRhdGFzZXQuY3NyZjtcclxuXHJcbiAgICAvL9Ce0LHQvdC+0LLQu9C10L3QuNC1IGxvY2FsU3RvcmFnZVxyXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGd1ZXN0UHJvZmlsZS5kYXRhLnByb2R1Y3RzLmZpbmQoIHAgPT4gcC5pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpKTtcclxuICAgIHByb2R1Y3QucXVhbnRpdHkgPSArZS50YXJnZXQudmFsdWU7XHJcbiAgICBzZXRTdG9yYWdlKCdndWVzdFByb2ZpbGUnLCBndWVzdFByb2ZpbGUpXHJcblxyXG4gICAgLy/QntCx0L3QvtCy0LvQtdC90LjQtSDQtNCw0L3QvdGL0YUg0LvQvtC60LDQu9GM0L3QvlxyXG4gICAgZmV0Y2goJy9jYXJ0L3VwZGF0ZS8nICsgZ3Vlc3RQcm9maWxlLmRhdGEudG9rZW4sIHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdYLVhTUkYtVE9LRU4nOiBjc3JmLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShndWVzdFByb2ZpbGUpXHJcbiAgICB9KS50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMuc3RhdHVzKSlcclxuXHJcbiAgICBjYWxjdWxhdGVUb3RhbENvc3QoKVxyXG59XHJcblxyXG4vL9Ch0L7Qt9C00LDQvdC40LUg0LrQvtGA0LfQuNC90Ysg0Lgg0LTQvtCx0LDQstC70LXQvdC40LUg0YLQvtCy0LDRgNC+0LJcclxuYXN5bmMgZnVuY3Rpb24gZ3Vlc3RBZGRUb0NhcnRIYW5kbGVyKGUpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdqcy1hZGRUb0NhcnQnKSkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICAgICAgICAgICAgICBxdWFudGl0eSA9IGUudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgY3NyZiA9IGUudGFyZ2V0LmRhdGFzZXQuY3NyZjtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGd1ZXN0UHJvZmlsZSA9IGF3YWl0IGdldEd1ZXN0UHJvZmlsZShjc3JmKTtcclxuXHJcbiAgICAgICAgICAgIC8v0JTQvtCx0LDQstC70LXQvdC40LUg0LjQt9C80LXQvdC10L3QuNC5INCyINC60L7RgNC30LjQvdGDICsg0YHQvtGF0YDQsNC90LXQvdC40LUg0LXQtSDQvdCwINC60LvQuNC10L3RgtC1XHJcbiAgICAgICAgICAgIGNvbnN0IGd1ZXN0UHJvZmlsZUFmdGVyQ2hhbmdlcyA9IGF3YWl0IGZldGNoKCcvY2FydC9hZGQvJyArIGd1ZXN0UHJvZmlsZS5kYXRhLnRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1YU1JGLVRPS0VOJzogY3NyZixcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGd1ZXN0UHJvZmlsZSxcclxuICAgICAgICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICAgICAgICBxdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHByb2R1Y3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3Vlc3RQcm9maWxlLmRhdGEucHJvZHVjdHMgPSBtZXJnZUNhcnRzKGd1ZXN0UHJvZmlsZS5kYXRhLnByb2R1Y3RzLCBwcm9kdWN0KVxyXG4gICAgICAgICAgICAgICAgc2V0U3RvcmFnZSgnZ3Vlc3RQcm9maWxlJywgZ3Vlc3RQcm9maWxlKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGd1ZXN0UHJvZmlsZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy/QodC+0YXRgNCw0L3QtdC90LjQtSDQutC+0YDQt9C40L3RiyDQu9C+0LrQsNC70YzQvdC+ICsg0YDQtdC00LjRgNC10LrRgiDQvdCwINC60L7RgNC30LjQvdGDXHJcbiAgICAgICAgICAgIGNvbnN0IGd1ZXN0UHJvZmlsZVNhdmVkTG9jYWxseSA9IGZldGNoKCcvY2FydC91cGRhdGUvJyArIGd1ZXN0UHJvZmlsZS5kYXRhLnRva2VuLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1YU1JGLVRPS0VOJzogY3NyZixcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ3Vlc3RQcm9maWxlQWZ0ZXJDaGFuZ2VzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYC9jYXJ0LyR7Z3Vlc3RQcm9maWxlLmRhdGEudG9rZW59YCkpXHJcbiAgICAgICAgfVxyXG4gICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG59XHJcblxyXG4vL9Cj0LTQsNC70LXQvdC40LUg0YLQvtCy0LDRgNCwINC40Lcg0LrQvtGA0LfQuNC90YtcclxuYXN5bmMgZnVuY3Rpb24gZ3Vlc3RSZW1vdmVQcm9kdWN0SGFuZGxlcihlKSB7XHJcbiAgICBjb25zdCBpZCA9IGUudGFyZ2V0LmRhdGFzZXQuaWQsXHJcbiAgICAgICAgICBjc3JmID0gZS50YXJnZXQuZGF0YXNldC5jc3JmO1xyXG4gICAgY29uc3QgZ3Vlc3RQcm9maWxlID0gYXdhaXQgZ2V0R3Vlc3RQcm9maWxlKGNzcmYpO1xyXG4gICAgZ3Vlc3RQcm9maWxlLmRhdGEucHJvZHVjdHMgPSBndWVzdFByb2ZpbGUuZGF0YS5wcm9kdWN0cy5maWx0ZXIoIHAgPT4gcC5pZC50b1N0cmluZygpICE9PSBpZC50b1N0cmluZygpIClcclxuICAgIHNldFN0b3JhZ2UoJ2d1ZXN0UHJvZmlsZScsIGd1ZXN0UHJvZmlsZSlcclxuXHJcbiAgICBmZXRjaChgL2NhcnQvcmVtb3ZlLyR7Z3Vlc3RQcm9maWxlLmRhdGEudG9rZW59LyR7aWR9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtWFNSRi1UT0tFTic6IGNzcmYsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGd1ZXN0UHJvZmlsZSlcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKGNhcnQgPT4gY2FydFJlbmRlcihjYXJ0LCAnZ3Vlc3QnKSlcclxuICAgIC50aGVuKGNhcnRUYWJsZSA9PiB7XHJcbiAgICAgICAgaWYoY2FydFRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXByb2R1Y3QnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBndWVzdENoYW5nZVF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLWd1ZXN0UHJvZHVjdFF1YW50aXR5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgZ3Vlc3RSZW1vdmVQcm9kdWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXJlbW92ZS1ndWVzdCcpO1xyXG5cclxuICAgICAgICAgICAgZ3Vlc3RDaGFuZ2VRdWFudGl0eS5mb3JFYWNoKCBxID0+IHEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZ3Vlc3RDaGFuZ2VUb3RhbFByaWNlKSk7XHJcbiAgICAgICAgICAgIGd1ZXN0UmVtb3ZlUHJvZHVjdC5mb3JFYWNoKCBiID0+IGIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBndWVzdFJlbW92ZVByb2R1Y3RIYW5kbGVyKSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHt0b0d1ZXN0Q2FydCwgZ3Vlc3RDaGFuZ2VUb3RhbFByaWNlLCBndWVzdEFkZFRvQ2FydEhhbmRsZXIsIGd1ZXN0UmVtb3ZlUHJvZHVjdEhhbmRsZXJ9IiwiZnVuY3Rpb24gbWVyZ2VDYXJ0cyhwcm9kdWN0cywgYWRkUHJvZHVjdCkge1xyXG4gICAgY29uc3QgaW5DYXJ0ID0gcHJvZHVjdHMuZmluZChwID0+IHAuaWQudG9TdHJpbmcoKSA9PT0gYWRkUHJvZHVjdC5pZC50b1N0cmluZygpICk7XHJcbiAgICBpZihpbkNhcnQpIHtcclxuICAgICAgICBpbkNhcnQucXVhbnRpdHkgPSAraW5DYXJ0LnF1YW50aXR5ICsgK2FkZFByb2R1Y3QucXVhbnRpdHk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHByb2R1Y3RzLnB1c2goYWRkUHJvZHVjdClcclxuICAgIH1cclxuICAgIHJldHVybiBwcm9kdWN0c1xyXG59XHJcbmV4cG9ydCB7bWVyZ2VDYXJ0c30iLCJpbXBvcnQge3RvQ3VycmVuY3l9IGZyb20gJy4uL3V0aWxzLmpzJztcclxuXHJcblxyXG4vL9Cf0L7QtNGB0YLRh9C10YIg0YHRgtC+0LjQvNC+0YHRgtC4INC00L7RgdGC0LDQstC60LhcclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVNoaXBwaW5nQ29zdCgpIHtcclxuICAgIHRyeXtcclxuICAgICAgICBjb25zdCBjaGVja291dEZvcm0gPSBkb2N1bWVudC5mb3Jtcy5jaGVja291dDtcclxuICAgICAgICBjb25zdCBzaGlwcGluZ09wdGlvbnMgPSBbLi4uY2hlY2tvdXRGb3JtLmVsZW1lbnRzLnNoaXBwaW5nXTtcclxuICAgICAgICBjb25zdCBwYXltZW50ID0gY2hlY2tvdXRGb3JtLmVsZW1lbnRzLnBheW1lbnQudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2l0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jaXRpZXNBdXRvY29tcGxldGUnKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBjYXJ0VG90YWwgPSBwYXJzZUZsb2F0KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jaGVja291dF9fY2FydC10b3RhbCcpLmlubmVySFRNTCk7XHJcbiAgICAgICAgY29uc3QgY2hlY2tlZE9wdGlvbiA9IHNoaXBwaW5nT3B0aW9ucy5maW5kKCBvcHRpb24gPT4gb3B0aW9uLmNoZWNrZWQgPT09IHRydWUpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrZWRPcHRpb25OYW1lID0gY2hlY2tlZE9wdGlvbi5pZDtcclxuICAgICAgICBjb25zdCBjc3JmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NzcmYnKS52YWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaXR5LCBwYXltZW50LCBjYXJ0VG90YWwsIGNoZWNrZWRPcHRpb25OYW1lKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNpdHkgJiYgcGF5bWVudCAmJiBjYXJ0VG90YWwgJiYgY2hlY2tlZE9wdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgZmV0Y2goJy9jaGVja291dC9jYWxjdWxhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnWC1YU1JGLVRPS0VOJzogY3NyZiwgXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2l0eSwgcGF5bWVudCwgY2FydFRvdGFsLCBjaGVja2VkT3B0aW9uTmFtZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jaGVja291dF9fdG90YWwnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbGl2ZXJ5Q29zdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jaGVja291dF9fZGVsaXZlcnlDb3N0Jyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUNvc3QgPSBvYmouZGF0YVswXS5Db3N0O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWwgPSBkZWxpdmVyeUNvc3QgKyBvYmouZGF0YVswXS5Bc3Nlc3NlZENvc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgdG90YWxDb250YWluZXIuaW5uZXJIVE1MID0gdG9DdXJyZW5jeSh0b3RhbCk7XHJcbiAgICAgICAgICAgICAgICBkZWxpdmVyeUNvc3RDb250YWluZXIuaW5uZXJIVE1MID0gdG9DdXJyZW5jeShkZWxpdmVyeUNvc3QpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7Y2FsY3VsYXRlU2hpcHBpbmdDb3N0fTsiLCJpbXBvcnQge3JlbmRlclNoaXBwaW5nRm9ybX0gZnJvbSAnLi9yZW5kZXJTaGlwcGluZ0Zvcm0uanMnO1xyXG5cclxuLy/QktGL0LHQvtGAINGB0L/QvtGB0L7QsdCwINC00L7RgdGC0LDQstC60LggICAgXHJcbmZ1bmN0aW9uIGNob2ljZU9mVGhlV2F5T2ZEZWxpdmVyeSgpIHtcclxuICAgIGNvbnN0IG5wRGVwYXJ0bWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCducERlcGFydG1lbnQnKTtcclxuICAgIGNvbnN0IG5wQWRkcmVzcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCducEFkZHJlc3MnKTtcclxuICAgIGNvbnN0IHVrcnBvc2h0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1a3Jwb3NodGEnKTtcclxuICAgIFxyXG4gICAgbnBEZXBhcnRtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHJlbmRlclNoaXBwaW5nRm9ybSk7XHJcbiAgICBucEFkZHJlc3MuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcmVuZGVyU2hpcHBpbmdGb3JtKTtcclxuICAgIHVrcnBvc2h0YS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCByZW5kZXJTaGlwcGluZ0Zvcm0pO1xyXG59XHJcblxyXG5leHBvcnQge2Nob2ljZU9mVGhlV2F5T2ZEZWxpdmVyeX07IiwiaW1wb3J0IHtjYWxjdWxhdGVTaGlwcGluZ0Nvc3R9IGZyb20gJy4vY2FsY3VsYXRlU2hpcHBpbmdDb3N0LmpzJztcclxuXHJcbmZ1bmN0aW9uIGdldFdhcmVob3VzZXNOUCgpIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1ucFdhcmVob3VzZXMnKTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGNvbnN0IGNzcmYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3NyZicpLnZhbHVlO1xyXG4gICAgY29uc3QgY2l0aWVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2l0aWVzQXV0b2NvbXBsZXRlJyk7XHJcbiAgICBjb25zdCBzZWxlY3RlZENpdHkgPSBjaXRpZXNJbnB1dC52YWx1ZTtcclxuICAgIGNhbGN1bGF0ZVNoaXBwaW5nQ29zdCgpXHJcblxyXG4gICAgZmV0Y2goJy9jaGVja291dC9zaGlwcGluZycsIHtcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICAgICdYLVhTUkYtVE9LRU4nOiBjc3JmLCBcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHNlbGVjdGVkQ2l0eSB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4od2FyZWhvdXNlcyA9PiB7XHJcbiAgICAgICAgaWYod2FyZWhvdXNlcy5sZW5ndGggPT09IDApIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8b3B0aW9uIGRpc2FibGVkIHNlbGVjdGVkPtCe0YLQtNC10LvQtdC90LjQtSDQvdC1INGA0LDQsdC+0YLQsNC10YI8L29wdGlvbj5gKVxyXG4gICAgICAgIHdhcmVob3VzZXMuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxvcHRpb24gdmFsdWU9XCIke2l0ZW19XCI+JHtpdGVtfTwvb3B0aW9uPmApXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7Z2V0V2FyZWhvdXNlc05QfTsiLCJpbXBvcnQge2NhbGN1bGF0ZVNoaXBwaW5nQ29zdH0gZnJvbSAnLi9jYWxjdWxhdGVTaGlwcGluZ0Nvc3QuanMnO1xyXG5pbXBvcnQge3RvQ3VycmVuY3l9IGZyb20gJy4uL3V0aWxzLmpzJztcclxuXHJcbi8v0J/QvtC70Y8g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQtNCwINC00L7RgdGC0LDQstC60LhcclxuY29uc3Qgc2hpcHBpbmdJbnB1dHMgPSB7XHJcbiAgICBucERlcGFydG1lbnQ6IFsnZGVwYXJ0bWVudCddLFxyXG4gICAgbnBBZGRyZXNzOiBbJ2xvY2FsaXR5JywgJ3N0cmVldCcsICdhcGFydG1lbnQnXSxcclxuICAgIHVrcnBvc2h0YTogWydsb2NhbGl0eScsICdwb3N0YWwtY29kZSddLFxyXG59XHJcblxyXG5jb25zdCBjaGVja291dEZvcm0gPSBkb2N1bWVudC5mb3Jtcy5jaGVja291dDtcclxuXHJcbi8v0KDQtdC90LTQtdGAINGC0YDQtdCx0YPQtdC80YvRhSDQv9C+0LvQtdC5INC00LvRjyDQsNC00YDQtdGB0LBcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNoaXBwaW5nRm9ybSgpIHtcclxuICAgIGNvbnN0IHNoaXBwaW5nT3B0aW9ucyA9IFsuLi5jaGVja291dEZvcm0uZWxlbWVudHMuc2hpcHBpbmddLFxyXG4gICAgICAgICAgY2hlY2tlZE9wdGlvbiA9ICBzaGlwcGluZ09wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5jaGVja2VkID09PSB0cnVlKSxcclxuICAgICAgICAgIGNoZWNrZWRPcHRpb25OYW1lID0gY2hlY2tlZE9wdGlvbi52YWx1ZSxcclxuICAgICAgICAgIHJlbmRlcklucHV0c0lkID0gc2hpcHBpbmdJbnB1dHNbY2hlY2tlZE9wdGlvbk5hbWVdLFxyXG4gICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZnJhZ21lbnQnKTtcclxuICAgIGNvbnN0IHJlbmRlcklucHV0cyA9IHJlbmRlcklucHV0c0lkLm1hcCggaWQgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtc2hpcHBpbmc9JHtpZH1dYCkpO1xyXG4gICAgY29uc3QgcmVuZGVySW5wdXRzQ2xvbmVzID0gcmVuZGVySW5wdXRzLm1hcCggaW5wdXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNsb25lID0gaW5wdXQuY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgIGNsb25lLnF1ZXJ5U2VsZWN0b3IoJy5qcy1yZXF1aXJlZCcpLnJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gY2xvbmVcclxuICAgIH0pO1xyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcmVuZGVySW5wdXRzQ2xvbmVzLmZvckVhY2goIGlucHV0ID0+IGNvbnRhaW5lci5hcHBlbmQoaW5wdXQpKVxyXG5cclxuICAgIGlmKGNoZWNrZWRPcHRpb25OYW1lID09PSAndWtycG9zaHRhJykge1xyXG4gICAgICAgIGNvbnN0IHRvdGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNoZWNrb3V0X190b3RhbCcpO1xyXG4gICAgICAgIGNvbnN0IGRlbGl2ZXJ5Q29zdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jaGVja291dF9fZGVsaXZlcnlDb3N0Jyk7XHJcbiAgICAgICAgY29uc3QgY2FydFRvdGFsID0gcGFyc2VGbG9hdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2hlY2tvdXRfX2NhcnQtdG90YWwnKS5pbm5lckhUTUwpO1xyXG4gICAgICAgIGNvbnN0IGRlbGl2ZXJ5Q29zdCA9IDM1O1xyXG4gICAgICAgIGNvbnN0IHRvdGFsID0gZGVsaXZlcnlDb3N0ICsgY2FydFRvdGFsO1xyXG5cclxuICAgICAgICB0b3RhbENvbnRhaW5lci5pbm5lckhUTUwgPSB0b0N1cnJlbmN5KHRvdGFsKTtcclxuICAgICAgICBkZWxpdmVyeUNvc3RDb250YWluZXIuaW5uZXJIVE1MID0gdG9DdXJyZW5jeShkZWxpdmVyeUNvc3QpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjYWxjdWxhdGVTaGlwcGluZ0Nvc3QoKTtcclxuICAgIH1cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQge3JlbmRlclNoaXBwaW5nRm9ybX07IiwiaW1wb3J0IHtzZXRTdG9yYWdlLCBnZXRTdG9yYWdlfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVHdWVzdFByb2ZpbGUoY3NyZikge1xyXG4gICAgcmV0dXJuIGZldGNoKFwiL2NhcnQvY3JlYXRlLXRva2VuXCIsIHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdYLVhTUkYtVE9LRU4nOiBjc3JmLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHByb2ZpbGUgPT4gc2V0U3RvcmFnZSgnZ3Vlc3RQcm9maWxlJywgcHJvZmlsZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEd1ZXN0UHJvZmlsZShjc3JmKSB7XHJcbiAgICByZXR1cm4gZ2V0U3RvcmFnZSgnZ3Vlc3RQcm9maWxlJykgPyBnZXRTdG9yYWdlKCdndWVzdFByb2ZpbGUnKSA6IGNyZWF0ZUd1ZXN0UHJvZmlsZShjc3JmKVxyXG59XHJcblxyXG5leHBvcnQge2NyZWF0ZUd1ZXN0UHJvZmlsZSwgZ2V0R3Vlc3RQcm9maWxlfSIsImltcG9ydCB7Z2V0V2FyZWhvdXNlc05QfSBmcm9tICcuL2NoZWNrb3V0L2dldFdhcmVob3VzZXNOUC5qcyc7XHJcblxyXG4vL9CY0J3QmNCm0JjQkNCb0JjQl9CQ0KbQmNCvINCt0JvQldCc0JXQndCi0J7QkiDQndCQINCh0KLQoNCQ0J3QmNCm0JVcclxuZnVuY3Rpb24gaW5pdGlhbGl6YXRpb25FbGVtcygpIHtcclxuICAgIE0uQXV0b0luaXQoKTtcclxuXHJcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2xpZGUnKSkge1xyXG4gICAgXHJcbiAgICAgICAgbGV0IGdsaWRlID0gbmV3IEdsaWRlKCcuZ2xpZGUnLCB7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjYXJvdXNlbCcsXHJcbiAgICAgICAgICAgIHBlclZpZXc6IDQsXHJcbiAgICAgICAgICAgIGZvY3VzQXQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBicmVha3BvaW50czoge1xyXG4gICAgICAgICAgICAgIDgwMDoge1xyXG4gICAgICAgICAgICAgICAgcGVyVmlldzogMlxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgNDgwOiB7XHJcbiAgICAgICAgICAgICAgICBwZXJWaWV3OiAxXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICBnbGlkZS5tb3VudCgpXHJcbiAgICB9ICAgIFxyXG59XHJcblxyXG4vLyDQmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQsNC60LrQvtGA0LTQtdC+0L3QsCDQuCDQtdCz0L4g0YLQuNC/0LBcclxuXHJcbmZ1bmN0aW9uIGNoZWNrb3V0Q29sbGFwc2libGVJbml0KCkge1xyXG4gIGNvbnN0IGNoZWNrb3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NoZWNrb3V0Jyk7XHJcbiAgY29uc3QgY2hlY2tvdXRDb2xsYXBzaWJsZSA9IGNoZWNrb3V0LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja291dF9fY29sbGFwc2libGUnKTtcclxuICBjb25zdCBjaGVja291dENvbGxhcHNpYmxlSW5pdCA9IE0uQ29sbGFwc2libGUuaW5pdChjaGVja291dENvbGxhcHNpYmxlLCB7XHJcbiAgICAgICAgYWNjb3JkaW9uOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgY29uc3QgY2hlY2tvdXRDb2xsYXBzaWJsZUluc3RhbmNlID0gTS5Db2xsYXBzaWJsZS5nZXRJbnN0YW5jZShjaGVja291dENvbGxhcHNpYmxlKTtcclxuXHJcbiAgcmV0dXJuIGNoZWNrb3V0Q29sbGFwc2libGVJbnN0YW5jZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2l0aWVzQXV0b2NvbXBsZXRlSW5wdXQoKSB7XHJcbiAgICBjb25zdCBjc3JmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NzcmYnKS52YWx1ZTtcclxuICAgIGxldCBjaXRpZXNJbnB1dCwgaW5pdGlhbGl6YXRpb25DaXRpZXNJbnB1dDtcclxuICAgIGxldCBjaXRpZXNBdXRvY29tcGxldGVPcHRpb25zID0ge1xyXG4gICAgICAgIG1pbkxlbmd0aDogMixcclxuICAgICAgICBvbkF1dG9jb21wbGV0ZTogZ2V0V2FyZWhvdXNlc05QXHJcbiAgICB9OyBcclxuICAgIGZldGNoKCcvY2hlY2tvdXQnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnWC1YU1JGLVRPS0VOJzogY3NyZiwgXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihvcHRpb25zID0+IHtcclxuICAgICAgICBjaXRpZXNBdXRvY29tcGxldGVPcHRpb25zLmRhdGEgPSBKU09OLnBhcnNlKG9wdGlvbnMpXHJcbiAgICAgICAgY2l0aWVzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2l0aWVzQXV0b2NvbXBsZXRlJyk7XHJcbiAgICAgICAgaW5pdGlhbGl6YXRpb25DaXRpZXNJbnB1dCA9IE0uQXV0b2NvbXBsZXRlLmluaXQoY2l0aWVzSW5wdXQsIGNpdGllc0F1dG9jb21wbGV0ZU9wdGlvbnMpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7aW5pdGlhbGl6YXRpb25FbGVtcywgY2hlY2tvdXRDb2xsYXBzaWJsZUluaXQsIGNpdGllc0F1dG9jb21wbGV0ZUlucHV0fVxyXG4iLCIvL9CU0J7QodCi0KPQnyDQmiDQm9Ce0JrQkNCb0KzQndCe0JzQoyDQpdCg0JDQndCY0JvQmNCp0KNcclxuXHJcbmZ1bmN0aW9uIHNldFN0b3JhZ2Uoa2V5LCBpbmZvKSB7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShpbmZvKSk7XHJcbiAgICByZXR1cm4gZ2V0U3RvcmFnZShrZXkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0b3JhZ2Uoa2V5KSB7XHJcbiAgICBsZXQgaXRlbSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2UoaXRlbSlcclxufVxyXG5cclxuZXhwb3J0IHtzZXRTdG9yYWdlLCBnZXRTdG9yYWdlfSIsIi8v0KfQuNGB0LXQu9CwINCyINCy0LDQu9GO0YLRg1xyXG5mdW5jdGlvbiB0b0N1cnJlbmN5KG51bSkge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLk51bWJlckZvcm1hdCAoJ3VhLVVBJywge1xyXG4gICAgICAgIGN1cnJlbmN5OiAndWFoJyxcclxuICAgICAgICBzdHlsZTogJ2N1cnJlbmN5J1xyXG4gICAgfSkuZm9ybWF0KG51bSlcclxufVxyXG5cclxuLy/QndCw0YHRgtGA0L7QudC60LAg0L7RgtC+0LHRgNCw0LbQtdC90LjRjyDQtNCw0YLRi1xyXG5mdW5jdGlvbiB0b0RhdGUoZGF0ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KCd1YS1VQScsIHtcclxuICAgICAgICBkYXk6ICcyLWRpZ2l0JyxcclxuICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgIHlhZXI6ICdudW1lcmljJyxcclxuICAgICAgICBob3VyOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgc2Vjb25kOiAnMi1kaWdpdCdcclxuICAgIH0pLmZvcm1hdChuZXcgRGF0ZShkYXRlKSlcclxufVxyXG5cclxuZnVuY3Rpb24gdG9EZXNpcmVkRm9ybWF0KCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmN1cnJlbmN5JykuZm9yRWFjaCggdmFsdWUgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByaWNlID0gcGFyc2VGbG9hdCh2YWx1ZS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSB0b0N1cnJlbmN5KHByaWNlKVxyXG4gICAgfSlcclxuICAgIFxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm9yZGVyc19fZGF0ZScpLmZvckVhY2goIG5vZGUgPT4ge1xyXG4gICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSB0b0RhdGUobm9kZS50ZXh0Q29udGVudClcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7dG9DdXJyZW5jeSwgdG9EYXRlLCB0b0Rlc2lyZWRGb3JtYXR9Il0sInNvdXJjZVJvb3QiOiIifQ==