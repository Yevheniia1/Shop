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

            //Изменение формы оплаты товара
            changePaymentHandler()
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

        function changePaymentHandler() {
            const checkoutForm = document.forms.checkout;
            const paymentContainer = checkoutForm.elements.payment;

            paymentContainer.addEventListener('change', _modules_checkout_calculateShippingCost_js__WEBPACK_IMPORTED_MODULE_5__["calculateShippingCost"])
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
                const redeliveryCost = obj.data[0].CostRedelivery;
                let deliveryCost;

                if(redeliveryCost) {
                    deliveryCost = obj.data[0].Cost + redeliveryCost
                } else {
                    deliveryCost = obj.data[0].Cost;
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbW9kdWxlcy9jYXJ0L2NhcnRSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvY2FydC9ndWVzdENhcnQuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvY2FydC9tZXJnZUNhcnRzLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tb2R1bGVzL2NoZWNrb3V0L2NhbGN1bGF0ZVNoaXBwaW5nQ29zdC5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbW9kdWxlcy9jaGVja291dC9jaG9pY2VPZlRoZVdheU9mRGVsaXZlcnkuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvY2hlY2tvdXQvZ2V0V2FyZWhvdXNlc05QLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tb2R1bGVzL2NoZWNrb3V0L3JlbmRlclNoaXBwaW5nRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9wdWJsaWMvbW9kdWxlcy9ndWVzdFByb2ZpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvaW5pdGlhbGl6YXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vcHVibGljL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL3B1YmxpYy9tb2R1bGVzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EsMENBQTBDO1FBQzFDOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7O1FBRUE7UUFDQSxpQ0FBaUM7O1FBRWpDO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBO1FBQ0E7UUFDQSxNQUFNO1FBQ047O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx3QkFBd0Isa0NBQWtDO1FBQzFELE1BQU07UUFDTjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQSwwQ0FBMEMsb0JBQW9CLFdBQVc7O1FBRXpFO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcE11RTtBQUNQOztBQUVoRTtBQUNBLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsb0NBQW9DOztBQUUvQztBQUMrRTs7QUFFL0U7QUFDd0Y7QUFDbEI7QUFDdUI7QUFDWDs7QUFFbEYsc0ZBQW1CLEdBQUc7QUFDdEIseUVBQWUsR0FBRzs7QUFFbEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxXQUFXLCtDQUErQyxTQUFTLG9KQUFvQztBQUN2RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVyxxRkFBcUYsU0FBUyw4SUFBcUM7QUFDOUk7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGdGQUFxQjtBQUN4RSxDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxzRUFBVztBQUM3RTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLHdDQUF3QywwRkFBdUI7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUVBQXlFLEdBQUc7QUFDNUU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVksOEdBQXdCOztBQUVwQztBQUNBLFlBQVksMEZBQXVCOztBQUVuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsbUJBQW1CLFNBQVMsd0tBQWtEO0FBQ2pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0RBQXdELGdHQUFxQjtBQUM3RTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ2hJQTtBQUFBO0FBQUE7QUFBZ0U7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJGQUEyRixLQUFLLGFBQWEsS0FBSyxlQUFlLFVBQVU7QUFDM0k7QUFDQTtBQUNBLHdDQUF3QyxTQUFTLFNBQVMsT0FBTztBQUNqRSx5Q0FBeUMsS0FBSywrQkFBK0IsT0FBTztBQUNwRjs7QUFFQTtBQUNBLGtEQUFrRCxXQUFXLGFBQWEsS0FBSyxlQUFlLFVBQVUsY0FBYyxLQUFLO0FBQzNIO0FBQ0E7QUFDQSx5REFBeUQsNERBQVUsVUFBVTtBQUM3RTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsK0RBQStELDREQUFVOztBQUV6RSxtRUFBbUUsS0FBSzs7QUFFeEUsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUU7QUFDNUI7QUFDZTtBQUNNO0FBQ3JCOzs7QUFHM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0VBQWU7QUFDOUM7O0FBRUEscUNBQXFDLE1BQU07QUFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMLDJEQUEyRCw0REFBVTtBQUNyRTs7O0FBR0E7QUFDQTtBQUNBLHlCQUF5QixtRUFBVTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksbUVBQVU7O0FBRWQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QyxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVDQUF1Qyx3RUFBZTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSw2Q0FBNkMsaUVBQVU7QUFDdkQsZ0JBQWdCLG1FQUFVO0FBQzFCO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3RELGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYiwwREFBMEQsd0JBQXdCO0FBQ2xGO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3RUFBZTtBQUM5QztBQUNBLElBQUksbUVBQVU7O0FBRWQsMEJBQTBCLHdCQUF3QixHQUFHLEdBQUc7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixpRUFBVTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7OztBQ2xJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBdUM7OztBQUd2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQSwyQ0FBMkMsNERBQVU7QUFDckQsa0RBQWtELDREQUFVO0FBQzVELGFBQWE7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFBQTtBQUFBO0FBQTJEOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRDQUE0Qyx5RUFBa0I7QUFDOUQseUNBQXlDLHlFQUFrQjtBQUMzRCx5Q0FBeUMseUVBQWtCO0FBQzNEOzs7Ozs7Ozs7Ozs7OztBQ1hBO0FBQUE7QUFBQTtBQUFpRTs7QUFFakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1RkFBcUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLFNBQVM7QUFDVCw4QkFBOEIsZUFBZTtBQUM3QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsS0FBSyxJQUFJLEtBQUs7QUFDbEYsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBaUU7QUFDMUI7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEYsR0FBRztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsNERBQVU7QUFDN0MsMENBQTBDLDREQUFVO0FBQ3BELEtBQUs7QUFDTCxRQUFRLHVGQUFxQjtBQUM3Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUMxQ0E7QUFBQTtBQUFBO0FBQUE7QUFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUMsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLHFCQUFxQixtRUFBVTtBQUMvQjs7QUFFQTtBQUNBLFdBQVcsbUVBQVUsbUJBQW1CLG1FQUFVO0FBQ2xEOzs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQThEOztBQUU5RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0EsSztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRFQUFlO0FBQ3ZDLE07QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUc4RTs7Ozs7Ozs7Ozs7OztBQy9EOUU7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiJmcm9udC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcblxuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHR9O1xuXG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImZyb250XCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7fVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5idW5kbGUuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3B1YmxpYy9hcHAuanNcIik7XG4iLCJcclxuaW1wb3J0IHt0b0N1cnJlbmN5LCB0b0RhdGUsIHRvRGVzaXJlZEZvcm1hdH0gZnJvbSAnLi9tb2R1bGVzL3V0aWxzLmpzJztcclxuaW1wb3J0IHtpbml0aWFsaXphdGlvbkVsZW1zfSBmcm9tICcuL21vZHVsZXMvaW5pdGlhbGl6YXRpb24uanMnO1xyXG5cclxuLy8gLy9sb2NhbFN0b3JhZ2VcclxuLy8gaW1wb3J0IHtzZXRTdG9yYWdlLCBnZXRTdG9yYWdlfSBmcm9tICcuL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzJztcclxuLy8gaW1wb3J0IHtjcmVhdGVHdWVzdFByb2ZpbGUsIGdldEd1ZXN0UHJvZmlsZX0gZnJvbSAnLi9tb2R1bGVzL2d1ZXN0UHJvZmlsZS5qcyc7XHJcblxyXG4vL0NhcnRcclxuaW1wb3J0IHt0b0d1ZXN0Q2FydCwgZ3Vlc3RBZGRUb0NhcnRIYW5kbGVyfSBmcm9tICcuL21vZHVsZXMvY2FydC9ndWVzdENhcnQuanMnO1xyXG5cclxuLy9DaGVja291dFxyXG5pbXBvcnQge2Nob2ljZU9mVGhlV2F5T2ZEZWxpdmVyeX0gZnJvbSAnLi9tb2R1bGVzL2NoZWNrb3V0L2Nob2ljZU9mVGhlV2F5T2ZEZWxpdmVyeS5qcyc7XHJcbmltcG9ydCB7Z2V0V2FyZWhvdXNlc05QfSBmcm9tICcuL21vZHVsZXMvY2hlY2tvdXQvZ2V0V2FyZWhvdXNlc05QLmpzJztcclxuaW1wb3J0IHtjaGVja291dENvbGxhcHNpYmxlSW5pdCwgY2l0aWVzQXV0b2NvbXBsZXRlSW5wdXR9IGZyb20gJy4vbW9kdWxlcy9pbml0aWFsaXphdGlvbi5qcyc7XHJcbmltcG9ydCB7Y2FsY3VsYXRlU2hpcHBpbmdDb3N0fSBmcm9tICcuL21vZHVsZXMvY2hlY2tvdXQvY2FsY3VsYXRlU2hpcHBpbmdDb3N0LmpzJztcclxuXHJcbmluaXRpYWxpemF0aW9uRWxlbXMoKTsgLy/QmNCd0JjQptCY0JDQm9CY0JfQkNCm0JjQryDQrdCb0JXQnNCV0J3QotCe0JIg0J3QkCDQodCi0KDQkNCd0JjQptCVXHJcbnRvRGVzaXJlZEZvcm1hdCgpOyAvL9Cf0YDQtdC+0LHRgNCw0LfQvtCy0LDQvdC40LUg0LTQsNC90L3Ri9GFINCyINGC0YDQtdCx0YPQtdC80YvQuSDRhNC+0YDQvNCw0YJcclxuXHJcbi8vLS3QmtCe0KDQl9CY0J3QkC0tXHJcblxyXG5jb25zdCBjYXJ0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQnKTtcclxuICAgICBcclxuaWYoY2FydCkge1xyXG4gICAgY29uc3QgcGVyc29uID0gY2FydC5kYXRhc2V0LnBlcnNvbjtcclxuXHJcbiAgICBpZihwZXJzb24gPT09ICd1c2VyJykge1xyXG4gICAgICAgIGxvYWRVc2VyQ2FydCgpXHJcbiAgICB9IGVsc2UgaWYocGVyc29uID09PSAnZ3Vlc3QnKSB7XHJcbiAgICAgICAgbG9hZEd1ZXN0Q2FydCgpXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyQ2FydCgpIHtcclxuXHJcbiAgICBjb25zdCB7dXNlckNoYW5nZVRvdGFsUHJpY2UsIHVzZXJSZW1vdmVQcm9kdWN0SGFuZGxlcn0gPSBhd2FpdCBpbXBvcnQoJy4vbW9kdWxlcy9jYXJ0L3VzZXJDYXJ0LmpzJyk7XHJcbiAgICBjb25zdCB1c2VyQ2hhbmdlUXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdXNlclByb2R1Y3RRdWFudGl0eScpO1xyXG4gICAgY29uc3QgdXNlclJlbW92ZVByb2R1Y3QgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXJlbW92ZS11c2VyJyk7XHJcbiAgICBcclxuICAgIC8v0JjQt9C80LXQvdC10L3QuNGPINC60L7Qu9C40YfQtdGB0YLQstCwINCyINC60L7RgNC30LjQvdC1INC00LvRjyDQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgdXNlckNoYW5nZVF1YW50aXR5LmZvckVhY2goIGkgPT4gaS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB1c2VyQ2hhbmdlVG90YWxQcmljZSkpXHJcblxyXG4gICAgLy/Qo9C00LDQu9C10L3QuNC1INGC0L7QstCw0YDQsCDQuNC3INC60L7RgNC30LjQvdGLINC00LvRjyDQsNCy0YLQvtGA0LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRj1xyXG4gICAgdXNlclJlbW92ZVByb2R1Y3QuZm9yRWFjaCggYiA9PiBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdXNlclJlbW92ZVByb2R1Y3RIYW5kbGVyKSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZEd1ZXN0Q2FydCgpIHtcclxuICAgIGNvbnN0IHt0b0d1ZXN0Q2FydCwgZ3Vlc3RDaGFuZ2VUb3RhbFByaWNlLCBndWVzdEFkZFRvQ2FydEhhbmRsZXIsIGd1ZXN0UmVtb3ZlUHJvZHVjdEhhbmRsZXJ9ID0gYXdhaXQgaW1wb3J0KCcuL21vZHVsZXMvY2FydC9ndWVzdENhcnQuanMnKTtcclxuICAgIGNvbnN0IGd1ZXN0Q2hhbmdlUXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtZ3Vlc3RQcm9kdWN0UXVhbnRpdHknKTtcclxuICAgIGNvbnN0IGd1ZXN0UmVtb3ZlUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1yZW1vdmUtZ3Vlc3QnKTtcclxuXHJcbiAgICAvL9CY0LfQvNC10L3QtdC90LjRjyDQutC+0LvQuNGH0LXRgdGC0LLQsCDQsiDQutC+0YDQt9C40L3QtSDQtNC70Y8g0L3QtdCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNC90L3QvtCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICBndWVzdENoYW5nZVF1YW50aXR5LmZvckVhY2goIGkgPT4gaS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBndWVzdENoYW5nZVRvdGFsUHJpY2UpKVxyXG5cclxuICAgIC8v0KPQtNCw0LvQtdC90LjQtSDRgtC+0LLQsNGA0LAg0LjQtyDQutC+0YDQt9C40L3RiyDQtNC70Y8g0L3QtdCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNC90L3QvtCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbiAgICBndWVzdFJlbW92ZVByb2R1Y3QuZm9yRWFjaCggYiA9PiBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3Vlc3RSZW1vdmVQcm9kdWN0SGFuZGxlcikpXHJcblxyXG59XHJcblxyXG4vL9CU0L7QsdCw0LLQu9C10L3QuNC1INGC0L7QstCw0YDQsCDQsiDQutC+0YDQt9C40L3RgyDQtNC70Y8g0L3QtdCw0LLRgtC+0YDQuNC30LjRgNC+0LLQsNC90L3QvtCz0L4g0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPXHJcbmNvbnN0IHByb2R1Y3RDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtY2FyZHMnKTtcclxuaWYocHJvZHVjdENhcmRDb250YWluZXIpIHtcclxuICAgIHByb2R1Y3RDYXJkQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3Vlc3RBZGRUb0NhcnRIYW5kbGVyKVxyXG59IFxyXG5cclxuLy/QodGB0YvQu9C60LAg0L3QsCDQutC+0YDQt9C40L3RgyDQvdC10LDQstGC0L7RgNC40LfQuNGA0L7QstCw0L3QvdC+0LPQviDQv9C+0LvRjNC30L7QstCw0YLQtdC70Y9cclxuY29uc3QgIGxpbmtHdWVzdENhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtdG9HdWVzdENhcnQnKTtcclxuaWYobGlua0d1ZXN0Q2FydCkge1xyXG4gICAgbGlua0d1ZXN0Q2FydC5mb3JFYWNoKCBpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b0d1ZXN0Q2FydCkpXHJcbn1cclxuXHJcbi8vLS3QntCk0J7QoNCc0JvQldCd0JjQlSDQl9CQ0JrQkNCX0JAtLVxyXG5cclxuY29uc3QgY2hlY2tvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tvdXQnKTtcclxuXHJcbmlmKGNoZWNrb3V0KSB7XHJcblxyXG4gICAgLy/QmNC90LjRhtC40LDQu9C40LfQsNGG0LjRjyDQsNC60LDRgNC00LXQvtC90LAg0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPINGE0L7RgNC80YtcclxuICAgIGNvbnN0IGNoZWNrb3V0Q29sbGFwc2libGVJbnN0YW5jZSA9IGNoZWNrb3V0Q29sbGFwc2libGVJbml0KCk7XHJcblxyXG4gICAgLy/QktCw0LvQuNC00LDRhtC40Y8g0L/QtdGA0LLQvtC5INGH0LDRgdGC0Lgg0YTQvtGA0LzRiyDRgSDQutC+0L3RgtCw0LrRgtC90YvQvNC4INC00LDQvdC90YvQvNC4IFxyXG4gICAgY29uc3QgY2hlY2tvdXRDb250YWN0VmFsaWRhdGlvbkJ0biA9IGNoZWNrb3V0LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jb250YWN0VmFsaWRhdGlvbicpO1xyXG4gICAgY2hlY2tvdXRDb250YWN0VmFsaWRhdGlvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBjb25zdCBpZCA9IFsnbmFtZScsICdzdXJuYW1lJywgJ3Bob25lJywgJ2VtYWlsJ107XHJcbiAgICAgICBcclxuICAgICAgICBsZXQgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g0JLQsNC70LjQtNCw0YbQuNGPINC/0L7Qu9C10LlcclxuICAgICAgICBjb25zdCBjb250YWN0SW5wdXRzID0gaWQubWFwKCAoaWQpID0+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApKTtcclxuICAgICAgICBjb250YWN0SW5wdXRzLmZvckVhY2goIGlucHV0ID0+IHtcclxuICAgICAgICAgICAgaWYoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICBmbGFnID0gZmFsc2VcclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICAvL9Ce0YLQutGA0YvRgtC40LUg0LLRgtC+0YDQvtC5INGH0LDRgdGC0Lgg0YTQvtGA0LzRiyDRgSDQuNC90YTQvtGA0LzQsNGG0LjQtdC5INC+INC00L7RgdGC0LDQstC60LVcclxuICAgICAgICAgICAgY29udHJvbENvbGxhcHNpYmxlKCk7XHJcblxyXG4gICAgICAgICAgICAvL9CS0YvQsdC+0YAg0YHQv9C+0YHQvtCx0LAg0LTQvtGB0YLQsNCy0LrQuFxyXG4gICAgICAgICAgICBjaG9pY2VPZlRoZVdheU9mRGVsaXZlcnkoKTtcclxuXHJcbiAgICAgICAgICAgIC8v0JfQsNCz0YDRg9C30LrQsCDRgdC/0LjRgdC60LAg0LPQvtGA0L7QtNC+0LIg0L3QvtCy0L7QuSDQv9C+0YfRgtGLXHJcbiAgICAgICAgICAgIGNpdGllc0F1dG9jb21wbGV0ZUlucHV0KCk7XHJcblxyXG4gICAgICAgICAgICAvL9CY0LfQvNC10L3QtdC90LjQtSDRhNC+0YDQvNGLINC+0L/Qu9Cw0YLRiyDRgtC+0LLQsNGA0LBcclxuICAgICAgICAgICAgY2hhbmdlUGF5bWVudEhhbmRsZXIoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gY29udHJvbENvbGxhcHNpYmxlKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7cmVuZGVyU2hpcHBpbmdGb3JtfSA9IGF3YWl0IGltcG9ydCgnLi9tb2R1bGVzL2NoZWNrb3V0L3JlbmRlclNoaXBwaW5nRm9ybS5qcycpO1xyXG4gICAgICAgICAgICBjb25zdCBzaGlwcGluZ0Jsb2NrID0gY2hlY2tvdXQucXVlcnlTZWxlY3RvcignLnNoaXBwaW5nX193cmFwcGVyJyk7XHJcblxyXG4gICAgICAgICAgICAvLyDQodC80LXQvdCwINCy0LjQtNC40LzQvtCz0L4g0LHQu9C+0LrQsFxyXG4gICAgICAgICAgICBzaGlwcGluZ0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICAgICAgICBjaGVja291dENvbGxhcHNpYmxlSW5zdGFuY2Uub3BlbigxKTtcclxuICAgICAgICAgICAgY2hlY2tvdXRDb2xsYXBzaWJsZUluc3RhbmNlLmNsb3NlKDApO1xyXG4gICAgICAgICAgICByZW5kZXJTaGlwcGluZ0Zvcm0oKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2hhbmdlUGF5bWVudEhhbmRsZXIoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrb3V0Rm9ybSA9IGRvY3VtZW50LmZvcm1zLmNoZWNrb3V0O1xyXG4gICAgICAgICAgICBjb25zdCBwYXltZW50Q29udGFpbmVyID0gY2hlY2tvdXRGb3JtLmVsZW1lbnRzLnBheW1lbnQ7XHJcblxyXG4gICAgICAgICAgICBwYXltZW50Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNhbGN1bGF0ZVNoaXBwaW5nQ29zdClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbiIsImltcG9ydCB7dG9DdXJyZW5jeSwgdG9EYXRlLCB0b0Rlc2lyZWRGb3JtYXR9IGZyb20gJy4uL3V0aWxzLmpzJztcclxuXHJcbmZ1bmN0aW9uIGNhcnRSZW5kZXIoY2FydCwgdXNlcikge1xyXG4gICAgY29uc3QgY2FydFRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQnKTtcclxuXHJcbiAgICBpZihjYXJ0LnByb2R1Y3RzLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBjYXJ0LnByb2R1Y3RzLm1hcCggcCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cImNhcnQtcHJvZHVjdFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidXR0b24gYnV0dG9uX2Nsb3NlX3NtYWxsIGpzLXJlbW92ZS0ke3VzZXJ9XCIgZGF0YS1pZD1cIiR7cC5pZH1cIiBkYXRhLWNzcmY9XCIke2NhcnQuY3NyZn1cIj48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ0Y2VsbCBjYXJ0X190Y2VsbF9wcm9kdWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzLyR7cC5pbWdbMF19XCIgYWx0PVwiJHtwLm5hbWV9XCIgd2lkdGg9XCIxMDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcHJvZHVjdHMvJHtwLmlkfVwiPjxoMyBjbGFzcz1cInByb2R1Y3RfX3RpdGxlXCI+JHtwLm5hbWV9PC9oMz48L2E+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJjYXJ0X190Y2VsbF9xdWFudGl0eSB0Y2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgdmFsdWU9XCIke3AucXVhbnRpdHl9XCIgZGF0YS1pZD1cIiR7cC5pZH1cIiBkYXRhLWNzcmY9XCIke2NhcnQuY3NyZn1cIiBjbGFzcz1cImpzLSR7dXNlcn1Qcm9kdWN0UXVhbnRpdHkgcXVhbnRpdHlcIiBtaW49XCIxXCI+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPHRkIGNsYXNzPVwidGNlbGwganMtcHJvZHVjdF9fcHJpY2UgY2FydF9fdGNlbGxfcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImN1cnJlbmN5IHByb2R1Y3RfX3ByaWNlXCI+JHt0b0N1cnJlbmN5KHAucHJpY2UpfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIGBcclxuICAgICAgICB9KS5qb2luKCcnKTtcclxuICAgICAgICBcclxuICAgICAgICBjYXJ0VGFibGUucXVlcnlTZWxlY3RvcigndGJvZHknKS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgICAgIGNhcnRUYWJsZS5xdWVyeVNlbGVjdG9yKCcuanMtY2FydF9fdG90YWwnKS5pbm5lckhUTUwgPSB0b0N1cnJlbmN5KGNhcnQucHJpY2UpO1xyXG5cclxuICAgICAgICAvLyBjb25zdCBxdWFudGl0eUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5qcy0ke3VzZXJ9UHJvZHVjdFF1YW50aXR5YCk7XHJcbiAgICAgICBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FydFRhYmxlLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHA+0KLQvtCy0LDRgNC+0LIg0LIg0LrQvtGA0LfQuNC90LUg0L/QvtC60LAg0L3QtdGCPC9wPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiL3Byb2R1Y3RzXCIgY2xhc3M9XCJsaW5rIGxpbmtfYWNjZW50XCI+0JLQtdGA0L3Rg9GC0YzRgdGPINC6INC/0L7QutGD0L/QutCw0Lw8L2E+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2FydFRhYmxlO1xyXG59ICBcclxuXHJcblxyXG5leHBvcnQge2NhcnRSZW5kZXJ9IiwiaW1wb3J0IHtjcmVhdGVHdWVzdFByb2ZpbGUsIGdldEd1ZXN0UHJvZmlsZX0gZnJvbSAnLi4vZ3Vlc3RQcm9maWxlLmpzJztcclxuaW1wb3J0IHtjYXJ0UmVuZGVyfSBmcm9tICcuL2NhcnRSZW5kZXIuanMnO1xyXG5pbXBvcnQge3NldFN0b3JhZ2UsIGdldFN0b3JhZ2V9IGZyb20gJy4uL2xvY2FsU3RvcmFnZS5qcyc7XHJcbmltcG9ydCB7dG9DdXJyZW5jeSwgdG9EYXRlLCB0b0Rlc2lyZWRGb3JtYXR9IGZyb20gJy4uL3V0aWxzLmpzJztcclxuaW1wb3J0IHttZXJnZUNhcnRzfSBmcm9tICcuL21lcmdlQ2FydHMuanMnO1xyXG5cclxuXHJcbi8v0KDQtdC00LjRgNC10LrRgiDQvdCwINC60L7RgNC30LjQvdGDIFxyXG5hc3luYyBmdW5jdGlvbiB0b0d1ZXN0Q2FydChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjc3JmID0gdGhpcy5kYXRhc2V0LmNzcmYsXHJcbiAgICAgICAgICBndWVzdFByb2ZpbGUgPSBhd2FpdCBnZXRHdWVzdFByb2ZpbGUoY3NyZiksXHJcbiAgICAgICAgICB0b2tlbiA9IGd1ZXN0UHJvZmlsZS5kYXRhLnRva2VuO1xyXG5cclxuICAgIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvY2FydC8ke3Rva2VufWApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGN1bGF0ZVRvdGFsQ29zdCgpIHtcclxuICAgIGNvbnN0IGNhcnRUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0Jyk7XHJcbiAgICBjb25zdCBwcm9kdWN0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FydC1wcm9kdWN0JyldO1xyXG5cclxuICAgIGNvbnN0IHRvdGFsID0gcHJvZHVjdHMucmVkdWNlKCAodG90YWwsIHByb2R1Y3QpID0+IHtcclxuICAgICAgICBjb25zdCBwcmljZUVsZW0gPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9kdWN0X19wcmljZT4ucHJvZHVjdF9fcHJpY2UnKTtcclxuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQocHJpY2VFbGVtLmlubmVySFRNTCk7XHJcbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBwcm9kdWN0LnF1ZXJ5U2VsZWN0b3IoJy5qcy1ndWVzdFByb2R1Y3RRdWFudGl0eScpLnZhbHVlO1xyXG5cclxuICAgICAgICByZXR1cm4gdG90YWwgKz0gK3ByaWNlICogK3F1YW50aXR5XHJcbiAgICB9LCAwKVxyXG4gICAgY2FydFRhYmxlLnF1ZXJ5U2VsZWN0b3IoJy5qcy1jYXJ0X190b3RhbCcpLmlubmVySFRNTCA9IHRvQ3VycmVuY3kodG90YWwpO1xyXG59XHJcblxyXG5cclxuLy/Qn9C10YDQtdGB0YfQtdGCINC4INGB0L7RhdGA0LDQvdC10L3QuNC1INC+0LHRidC10Lkg0YHRgtC+0LjQvNC+0YHRgtC4INC60L7RgNC30LjQvdGLXHJcbmZ1bmN0aW9uIGd1ZXN0Q2hhbmdlVG90YWxQcmljZShlKSB7XHJcbiAgICBjb25zdCBndWVzdFByb2ZpbGUgPSBnZXRTdG9yYWdlKCdndWVzdFByb2ZpbGUnKTtcclxuICAgIGNvbnN0IGNzcmYgPSBlLnRhcmdldC5kYXRhc2V0LmNzcmY7XHJcblxyXG4gICAgLy/QntCx0L3QvtCy0LvQtdC90LjQtSBsb2NhbFN0b3JhZ2VcclxuICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBndWVzdFByb2ZpbGUuZGF0YS5wcm9kdWN0cy5maW5kKCBwID0+IHAuaWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKSk7XHJcbiAgICBwcm9kdWN0LnF1YW50aXR5ID0gK2UudGFyZ2V0LnZhbHVlO1xyXG4gICAgc2V0U3RvcmFnZSgnZ3Vlc3RQcm9maWxlJywgZ3Vlc3RQcm9maWxlKVxyXG5cclxuICAgIC8v0J7QsdC90L7QstC70LXQvdC40LUg0LTQsNC90L3Ri9GFINC70L7QutCw0LvRjNC90L5cclxuICAgIGZldGNoKCcvY2FydC91cGRhdGUvJyArIGd1ZXN0UHJvZmlsZS5kYXRhLnRva2VuLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnWC1YU1JGLVRPS0VOJzogY3NyZixcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZ3Vlc3RQcm9maWxlKVxyXG4gICAgfSkudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzLnN0YXR1cykpXHJcblxyXG4gICAgY2FsY3VsYXRlVG90YWxDb3N0KClcclxufVxyXG5cclxuLy/QodC+0LfQtNCw0L3QuNC1INC60L7RgNC30LjQvdGLINC4INC00L7QsdCw0LLQu9C10L3QuNC1INGC0L7QstCw0YDQvtCyXHJcbmFzeW5jIGZ1bmN0aW9uIGd1ZXN0QWRkVG9DYXJ0SGFuZGxlcihlKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnanMtYWRkVG9DYXJ0JykpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZCxcclxuICAgICAgICAgICAgICAgICAgcXVhbnRpdHkgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgIGNzcmYgPSBlLnRhcmdldC5kYXRhc2V0LmNzcmY7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBndWVzdFByb2ZpbGUgPSBhd2FpdCBnZXRHdWVzdFByb2ZpbGUoY3NyZik7XHJcblxyXG4gICAgICAgICAgICAvL9CU0L7QsdCw0LLQu9C10L3QuNC1INC40LfQvNC10L3QtdC90LjQuSDQsiDQutC+0YDQt9C40L3RgyArINGB0L7RhdGA0LDQvdC10L3QuNC1INC10LUg0L3QsCDQutC70LjQtdC90YLQtVxyXG4gICAgICAgICAgICBjb25zdCBndWVzdFByb2ZpbGVBZnRlckNoYW5nZXMgPSBhd2FpdCBmZXRjaCgnL2NhcnQvYWRkLycgKyBndWVzdFByb2ZpbGUuZGF0YS50b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ1gtWFNSRi1UT0tFTic6IGNzcmYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBndWVzdFByb2ZpbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IHtcclxuICAgICAgICAgICAgICAgIGd1ZXN0UHJvZmlsZS5kYXRhLnByb2R1Y3RzID0gbWVyZ2VDYXJ0cyhndWVzdFByb2ZpbGUuZGF0YS5wcm9kdWN0cywgcHJvZHVjdClcclxuICAgICAgICAgICAgICAgIHNldFN0b3JhZ2UoJ2d1ZXN0UHJvZmlsZScsIGd1ZXN0UHJvZmlsZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBndWVzdFByb2ZpbGVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8v0KHQvtGF0YDQsNC90LXQvdC40LUg0LrQvtGA0LfQuNC90Ysg0LvQvtC60LDQu9GM0L3QviArINGA0LXQtNC40YDQtdC60YIg0L3QsCDQutC+0YDQt9C40L3Rg1xyXG4gICAgICAgICAgICBjb25zdCBndWVzdFByb2ZpbGVTYXZlZExvY2FsbHkgPSBmZXRjaCgnL2NhcnQvdXBkYXRlLycgKyBndWVzdFByb2ZpbGUuZGF0YS50b2tlbiwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ1gtWFNSRi1UT0tFTic6IGNzcmYsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGd1ZXN0UHJvZmlsZUFmdGVyQ2hhbmdlcylcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAvY2FydC8ke2d1ZXN0UHJvZmlsZS5kYXRhLnRva2VufWApKVxyXG4gICAgICAgIH1cclxuICAgICB9IGNhdGNoKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxufVxyXG5cclxuLy/Qo9C00LDQu9C10L3QuNC1INGC0L7QstCw0YDQsCDQuNC3INC60L7RgNC30LjQvdGLXHJcbmFzeW5jIGZ1bmN0aW9uIGd1ZXN0UmVtb3ZlUHJvZHVjdEhhbmRsZXIoZSkge1xyXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICAgICAgY3NyZiA9IGUudGFyZ2V0LmRhdGFzZXQuY3NyZjtcclxuICAgIGNvbnN0IGd1ZXN0UHJvZmlsZSA9IGF3YWl0IGdldEd1ZXN0UHJvZmlsZShjc3JmKTtcclxuICAgIGd1ZXN0UHJvZmlsZS5kYXRhLnByb2R1Y3RzID0gZ3Vlc3RQcm9maWxlLmRhdGEucHJvZHVjdHMuZmlsdGVyKCBwID0+IHAuaWQudG9TdHJpbmcoKSAhPT0gaWQudG9TdHJpbmcoKSApXHJcbiAgICBzZXRTdG9yYWdlKCdndWVzdFByb2ZpbGUnLCBndWVzdFByb2ZpbGUpXHJcblxyXG4gICAgZmV0Y2goYC9jYXJ0L3JlbW92ZS8ke2d1ZXN0UHJvZmlsZS5kYXRhLnRva2VufS8ke2lkfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdYLVhTUkYtVE9LRU4nOiBjc3JmLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShndWVzdFByb2ZpbGUpXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihjYXJ0ID0+IGNhcnRSZW5kZXIoY2FydCwgJ2d1ZXN0JykpXHJcbiAgICAudGhlbihjYXJ0VGFibGUgPT4ge1xyXG4gICAgICAgIGlmKGNhcnRUYWJsZS5xdWVyeVNlbGVjdG9yKCcuY2FydC1wcm9kdWN0JykpIHtcclxuICAgICAgICAgICAgY29uc3QgZ3Vlc3RDaGFuZ2VRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1ndWVzdFByb2R1Y3RRdWFudGl0eScpLFxyXG4gICAgICAgICAgICAgICAgICAgIGd1ZXN0UmVtb3ZlUHJvZHVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1yZW1vdmUtZ3Vlc3QnKTtcclxuXHJcbiAgICAgICAgICAgIGd1ZXN0Q2hhbmdlUXVhbnRpdHkuZm9yRWFjaCggcSA9PiBxLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGd1ZXN0Q2hhbmdlVG90YWxQcmljZSkpO1xyXG4gICAgICAgICAgICBndWVzdFJlbW92ZVByb2R1Y3QuZm9yRWFjaCggYiA9PiBiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ3Vlc3RSZW1vdmVQcm9kdWN0SGFuZGxlcikpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuXHJcbmV4cG9ydCB7dG9HdWVzdENhcnQsIGd1ZXN0Q2hhbmdlVG90YWxQcmljZSwgZ3Vlc3RBZGRUb0NhcnRIYW5kbGVyLCBndWVzdFJlbW92ZVByb2R1Y3RIYW5kbGVyfSIsImZ1bmN0aW9uIG1lcmdlQ2FydHMocHJvZHVjdHMsIGFkZFByb2R1Y3QpIHtcclxuICAgIGNvbnN0IGluQ2FydCA9IHByb2R1Y3RzLmZpbmQocCA9PiBwLmlkLnRvU3RyaW5nKCkgPT09IGFkZFByb2R1Y3QuaWQudG9TdHJpbmcoKSApO1xyXG4gICAgaWYoaW5DYXJ0KSB7XHJcbiAgICAgICAgaW5DYXJ0LnF1YW50aXR5ID0gK2luQ2FydC5xdWFudGl0eSArICthZGRQcm9kdWN0LnF1YW50aXR5O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwcm9kdWN0cy5wdXNoKGFkZFByb2R1Y3QpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvZHVjdHNcclxufVxyXG5leHBvcnQge21lcmdlQ2FydHN9IiwiaW1wb3J0IHt0b0N1cnJlbmN5fSBmcm9tICcuLi91dGlscy5qcyc7XHJcblxyXG5cclxuLy/Qn9C+0LTRgdGC0YfQtdGCINGB0YLQvtC40LzQvtGB0YLQuCDQtNC+0YHRgtCw0LLQutC4XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVTaGlwcGluZ0Nvc3QoKSB7XHJcbiAgICB0cnl7XHJcbiAgICAgICAgY29uc3QgY2hlY2tvdXRGb3JtID0gZG9jdW1lbnQuZm9ybXMuY2hlY2tvdXQ7XHJcbiAgICAgICAgY29uc3Qgc2hpcHBpbmdPcHRpb25zID0gWy4uLmNoZWNrb3V0Rm9ybS5lbGVtZW50cy5zaGlwcGluZ107XHJcbiAgICAgICAgY29uc3QgcGF5bWVudCA9IGNoZWNrb3V0Rm9ybS5lbGVtZW50cy5wYXltZW50LnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2l0aWVzQXV0b2NvbXBsZXRlJykudmFsdWU7XHJcbiAgICAgICAgY29uc3QgY2FydFRvdGFsID0gcGFyc2VGbG9hdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2hlY2tvdXRfX2NhcnQtdG90YWwnKS5pbm5lckhUTUwpO1xyXG4gICAgICAgIGNvbnN0IGNoZWNrZWRPcHRpb24gPSBzaGlwcGluZ09wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5jaGVja2VkID09PSB0cnVlKTtcclxuICAgICAgICBjb25zdCBjaGVja2VkT3B0aW9uTmFtZSA9IGNoZWNrZWRPcHRpb24uaWQ7XHJcbiAgICAgICAgY29uc3QgY3NyZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjc3JmJykudmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coY2l0eSwgcGF5bWVudCwgY2FydFRvdGFsLCBjaGVja2VkT3B0aW9uTmFtZSlcclxuICAgICAgICBcclxuICAgICAgICBpZihjaXR5ICYmIHBheW1lbnQgJiYgY2FydFRvdGFsICYmIGNoZWNrZWRPcHRpb25OYW1lKSB7XHJcbiAgICAgICAgICAgIGZldGNoKCcvY2hlY2tvdXQvY2FsY3VsYXRlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ1gtWFNSRi1UT0tFTic6IGNzcmYsIFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNpdHksIHBheW1lbnQsIGNhcnRUb3RhbCwgY2hlY2tlZE9wdGlvbk5hbWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2hlY2tvdXRfX3RvdGFsJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWxpdmVyeUNvc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2hlY2tvdXRfX2RlbGl2ZXJ5Q29zdCcpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVkZWxpdmVyeUNvc3QgPSBvYmouZGF0YVswXS5Db3N0UmVkZWxpdmVyeTtcclxuICAgICAgICAgICAgICAgIGxldCBkZWxpdmVyeUNvc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocmVkZWxpdmVyeUNvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxpdmVyeUNvc3QgPSBvYmouZGF0YVswXS5Db3N0ICsgcmVkZWxpdmVyeUNvc3RcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsaXZlcnlDb3N0ID0gb2JqLmRhdGFbMF0uQ29zdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gZGVsaXZlcnlDb3N0ICsgb2JqLmRhdGFbMF0uQXNzZXNzZWRDb3N0O1xyXG5cclxuICAgICAgICAgICAgICAgIHRvdGFsQ29udGFpbmVyLmlubmVySFRNTCA9IHRvQ3VycmVuY3kodG90YWwpO1xyXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlDb3N0Q29udGFpbmVyLmlubmVySFRNTCA9IHRvQ3VycmVuY3koZGVsaXZlcnlDb3N0KTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2goZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge2NhbGN1bGF0ZVNoaXBwaW5nQ29zdH07IiwiaW1wb3J0IHtyZW5kZXJTaGlwcGluZ0Zvcm19IGZyb20gJy4vcmVuZGVyU2hpcHBpbmdGb3JtLmpzJztcclxuXHJcbi8v0JLRi9Cx0L7RgCDRgdC/0L7RgdC+0LHQsCDQtNC+0YHRgtCw0LLQutC4ICAgIFxyXG5mdW5jdGlvbiBjaG9pY2VPZlRoZVdheU9mRGVsaXZlcnkoKSB7XHJcbiAgICBjb25zdCBucERlcGFydG1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnBEZXBhcnRtZW50Jyk7XHJcbiAgICBjb25zdCBucEFkZHJlc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnBBZGRyZXNzJyk7XHJcbiAgICBjb25zdCB1a3Jwb3NodGEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndWtycG9zaHRhJyk7XHJcbiAgICBcclxuICAgIG5wRGVwYXJ0bWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCByZW5kZXJTaGlwcGluZ0Zvcm0pO1xyXG4gICAgbnBBZGRyZXNzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHJlbmRlclNoaXBwaW5nRm9ybSk7XHJcbiAgICB1a3Jwb3NodGEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcmVuZGVyU2hpcHBpbmdGb3JtKTtcclxufVxyXG5cclxuZXhwb3J0IHtjaG9pY2VPZlRoZVdheU9mRGVsaXZlcnl9OyIsImltcG9ydCB7Y2FsY3VsYXRlU2hpcHBpbmdDb3N0fSBmcm9tICcuL2NhbGN1bGF0ZVNoaXBwaW5nQ29zdC5qcyc7XHJcblxyXG5mdW5jdGlvbiBnZXRXYXJlaG91c2VzTlAoKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbnBXYXJlaG91c2VzJyk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBjb25zdCBjc3JmID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NzcmYnKS52YWx1ZTtcclxuICAgIGNvbnN0IGNpdGllc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNpdGllc0F1dG9jb21wbGV0ZScpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRDaXR5ID0gY2l0aWVzSW5wdXQudmFsdWU7XHJcbiAgICBjYWxjdWxhdGVTaGlwcGluZ0Nvc3QoKVxyXG5cclxuICAgIGZldGNoKCcvY2hlY2tvdXQvc2hpcHBpbmcnLCB7XHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnWC1YU1JGLVRPS0VOJzogY3NyZiwgXHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBzZWxlY3RlZENpdHkgfSlcclxuICAgIH0pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC50aGVuKHdhcmVob3VzZXMgPT4ge1xyXG4gICAgICAgIGlmKHdhcmVob3VzZXMubGVuZ3RoID09PSAwKSBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPG9wdGlvbiBkaXNhYmxlZCBzZWxlY3RlZD7QntGC0LTQtdC70LXQvdC40LUg0L3QtSDRgNCw0LHQvtGC0LDQtdGCPC9vcHRpb24+YClcclxuICAgICAgICB3YXJlaG91c2VzLmZvckVhY2goIGl0ZW0gPT4ge1xyXG4gICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8b3B0aW9uIHZhbHVlPVwiJHtpdGVtfVwiPiR7aXRlbX08L29wdGlvbj5gKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQge2dldFdhcmVob3VzZXNOUH07IiwiaW1wb3J0IHtjYWxjdWxhdGVTaGlwcGluZ0Nvc3R9IGZyb20gJy4vY2FsY3VsYXRlU2hpcHBpbmdDb3N0LmpzJztcclxuaW1wb3J0IHt0b0N1cnJlbmN5fSBmcm9tICcuLi91dGlscy5qcyc7XHJcblxyXG4vL9Cf0L7Qu9GPINC00LvRjyDQt9Cw0L/QvtC70L3QtdC90LjRjyDQtNC70Y8g0LrQvtC90LrRgNC10YLQvdC+0LPQviDQstC40LTQsCDQtNC+0YHRgtCw0LLQutC4XHJcbmNvbnN0IHNoaXBwaW5nSW5wdXRzID0ge1xyXG4gICAgbnBEZXBhcnRtZW50OiBbJ2RlcGFydG1lbnQnXSxcclxuICAgIG5wQWRkcmVzczogWydsb2NhbGl0eScsICdzdHJlZXQnLCAnYXBhcnRtZW50J10sXHJcbiAgICB1a3Jwb3NodGE6IFsnbG9jYWxpdHknLCAncG9zdGFsLWNvZGUnXSxcclxufVxyXG5cclxuY29uc3QgY2hlY2tvdXRGb3JtID0gZG9jdW1lbnQuZm9ybXMuY2hlY2tvdXQ7XHJcblxyXG4vL9Cg0LXQvdC00LXRgCDRgtGA0LXQsdGD0LXQvNGL0YUg0L/QvtC70LXQuSDQtNC70Y8g0LDQtNGA0LXRgdCwXHJcblxyXG5mdW5jdGlvbiByZW5kZXJTaGlwcGluZ0Zvcm0oKSB7XHJcbiAgICBjb25zdCBzaGlwcGluZ09wdGlvbnMgPSBbLi4uY2hlY2tvdXRGb3JtLmVsZW1lbnRzLnNoaXBwaW5nXSxcclxuICAgICAgICAgIGNoZWNrZWRPcHRpb24gPSAgc2hpcHBpbmdPcHRpb25zLmZpbmQoIG9wdGlvbiA9PiBvcHRpb24uY2hlY2tlZCA9PT0gdHJ1ZSksXHJcbiAgICAgICAgICBjaGVja2VkT3B0aW9uTmFtZSA9IGNoZWNrZWRPcHRpb24udmFsdWUsXHJcbiAgICAgICAgICByZW5kZXJJbnB1dHNJZCA9IHNoaXBwaW5nSW5wdXRzW2NoZWNrZWRPcHRpb25OYW1lXSxcclxuICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWZyYWdtZW50Jyk7XHJcbiAgICBjb25zdCByZW5kZXJJbnB1dHMgPSByZW5kZXJJbnB1dHNJZC5tYXAoIGlkID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXNoaXBwaW5nPSR7aWR9XWApKTtcclxuICAgIGNvbnN0IHJlbmRlcklucHV0c0Nsb25lcyA9IHJlbmRlcklucHV0cy5tYXAoIGlucHV0ID0+IHtcclxuICAgICAgICBjb25zdCBjbG9uZSA9IGlucHV0LmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICBjbG9uZS5xdWVyeVNlbGVjdG9yKCcuanMtcmVxdWlyZWQnKS5yZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGNsb25lXHJcbiAgICB9KTtcclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIHJlbmRlcklucHV0c0Nsb25lcy5mb3JFYWNoKCBpbnB1dCA9PiBjb250YWluZXIuYXBwZW5kKGlucHV0KSlcclxuXHJcbiAgICBpZihjaGVja2VkT3B0aW9uTmFtZSA9PT0gJ3VrcnBvc2h0YScpIHtcclxuICAgICAgICBjb25zdCB0b3RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1jaGVja291dF9fdG90YWwnKTtcclxuICAgICAgICBjb25zdCBkZWxpdmVyeUNvc3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtY2hlY2tvdXRfX2RlbGl2ZXJ5Q29zdCcpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRUb3RhbCA9IHBhcnNlRmxvYXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNoZWNrb3V0X19jYXJ0LXRvdGFsJykuaW5uZXJIVE1MKTtcclxuICAgICAgICBjb25zdCBkZWxpdmVyeUNvc3QgPSAzNTtcclxuICAgICAgICBjb25zdCB0b3RhbCA9IGRlbGl2ZXJ5Q29zdCArIGNhcnRUb3RhbDtcclxuXHJcbiAgICAgICAgdG90YWxDb250YWluZXIuaW5uZXJIVE1MID0gdG9DdXJyZW5jeSh0b3RhbCk7XHJcbiAgICAgICAgZGVsaXZlcnlDb3N0Q29udGFpbmVyLmlubmVySFRNTCA9IHRvQ3VycmVuY3koZGVsaXZlcnlDb3N0KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2FsY3VsYXRlU2hpcHBpbmdDb3N0KCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJTaGlwcGluZ0Zvcm19OyIsImltcG9ydCB7c2V0U3RvcmFnZSwgZ2V0U3RvcmFnZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3Vlc3RQcm9maWxlKGNzcmYpIHtcclxuICAgIHJldHVybiBmZXRjaChcIi9jYXJ0L2NyZWF0ZS10b2tlblwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnWC1YU1JGLVRPS0VOJzogY3NyZixcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04J1xyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihwcm9maWxlID0+IHNldFN0b3JhZ2UoJ2d1ZXN0UHJvZmlsZScsIHByb2ZpbGUpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRHdWVzdFByb2ZpbGUoY3NyZikge1xyXG4gICAgcmV0dXJuIGdldFN0b3JhZ2UoJ2d1ZXN0UHJvZmlsZScpID8gZ2V0U3RvcmFnZSgnZ3Vlc3RQcm9maWxlJykgOiBjcmVhdGVHdWVzdFByb2ZpbGUoY3NyZilcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVHdWVzdFByb2ZpbGUsIGdldEd1ZXN0UHJvZmlsZX0iLCJpbXBvcnQge2dldFdhcmVob3VzZXNOUH0gZnJvbSAnLi9jaGVja291dC9nZXRXYXJlaG91c2VzTlAuanMnO1xyXG5cclxuLy/QmNCd0JjQptCY0JDQm9CY0JfQkNCm0JjQryDQrdCb0JXQnNCV0J3QotCe0JIg0J3QkCDQodCi0KDQkNCd0JjQptCVXHJcbmZ1bmN0aW9uIGluaXRpYWxpemF0aW9uRWxlbXMoKSB7XHJcbiAgICBNLkF1dG9Jbml0KCk7XHJcblxyXG4gICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdsaWRlJykpIHtcclxuICAgIFxyXG4gICAgICAgIGxldCBnbGlkZSA9IG5ldyBHbGlkZSgnLmdsaWRlJywge1xyXG4gICAgICAgICAgICB0eXBlOiAnY2Fyb3VzZWwnLFxyXG4gICAgICAgICAgICBwZXJWaWV3OiA0LFxyXG4gICAgICAgICAgICBmb2N1c0F0OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAgICAgICA4MDA6IHtcclxuICAgICAgICAgICAgICAgIHBlclZpZXc6IDJcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIDQ4MDoge1xyXG4gICAgICAgICAgICAgICAgcGVyVmlldzogMVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgZ2xpZGUubW91bnQoKVxyXG4gICAgfSAgICBcclxufVxyXG5cclxuLy8g0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0LDQutC60L7RgNC00LXQvtC90LAg0Lgg0LXQs9C+INGC0LjQv9CwXHJcblxyXG5mdW5jdGlvbiBjaGVja291dENvbGxhcHNpYmxlSW5pdCgpIHtcclxuICBjb25zdCBjaGVja291dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGVja291dCcpO1xyXG4gIGNvbnN0IGNoZWNrb3V0Q29sbGFwc2libGUgPSBjaGVja291dC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tvdXRfX2NvbGxhcHNpYmxlJyk7XHJcbiAgY29uc3QgY2hlY2tvdXRDb2xsYXBzaWJsZUluaXQgPSBNLkNvbGxhcHNpYmxlLmluaXQoY2hlY2tvdXRDb2xsYXBzaWJsZSwge1xyXG4gICAgICAgIGFjY29yZGlvbjogZmFsc2VcclxuICAgIH0pO1xyXG4gIGNvbnN0IGNoZWNrb3V0Q29sbGFwc2libGVJbnN0YW5jZSA9IE0uQ29sbGFwc2libGUuZ2V0SW5zdGFuY2UoY2hlY2tvdXRDb2xsYXBzaWJsZSk7XHJcblxyXG4gIHJldHVybiBjaGVja291dENvbGxhcHNpYmxlSW5zdGFuY2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNpdGllc0F1dG9jb21wbGV0ZUlucHV0KCkge1xyXG4gICAgY29uc3QgY3NyZiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjc3JmJykudmFsdWU7XHJcbiAgICBsZXQgY2l0aWVzSW5wdXQsIGluaXRpYWxpemF0aW9uQ2l0aWVzSW5wdXQ7XHJcbiAgICBsZXQgY2l0aWVzQXV0b2NvbXBsZXRlT3B0aW9ucyA9IHtcclxuICAgICAgICBtaW5MZW5ndGg6IDIsXHJcbiAgICAgICAgb25BdXRvY29tcGxldGU6IGdldFdhcmVob3VzZXNOUFxyXG4gICAgfTsgXHJcbiAgICBmZXRjaCgnL2NoZWNrb3V0Jywge1xyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ1gtWFNSRi1UT0tFTic6IGNzcmYsIFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgLnRoZW4ob3B0aW9ucyA9PiB7XHJcbiAgICAgICAgY2l0aWVzQXV0b2NvbXBsZXRlT3B0aW9ucy5kYXRhID0gSlNPTi5wYXJzZShvcHRpb25zKVxyXG4gICAgICAgIGNpdGllc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWNpdGllc0F1dG9jb21wbGV0ZScpO1xyXG4gICAgICAgIGluaXRpYWxpemF0aW9uQ2l0aWVzSW5wdXQgPSBNLkF1dG9jb21wbGV0ZS5pbml0KGNpdGllc0lucHV0LCBjaXRpZXNBdXRvY29tcGxldGVPcHRpb25zKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpXHJcbn1cclxuXHJcblxyXG5leHBvcnQge2luaXRpYWxpemF0aW9uRWxlbXMsIGNoZWNrb3V0Q29sbGFwc2libGVJbml0LCBjaXRpZXNBdXRvY29tcGxldGVJbnB1dH1cclxuIiwiLy/QlNCe0KHQotCj0J8g0Jog0JvQntCa0JDQm9Cs0J3QntCc0KMg0KXQoNCQ0J3QmNCb0JjQqdCjXHJcblxyXG5mdW5jdGlvbiBzZXRTdG9yYWdlKGtleSwgaW5mbykge1xyXG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaW5mbykpO1xyXG4gICAgcmV0dXJuIGdldFN0b3JhZ2Uoa2V5KVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdG9yYWdlKGtleSkge1xyXG4gICAgbGV0IGl0ZW0gPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgIHJldHVybiBKU09OLnBhcnNlKGl0ZW0pXHJcbn1cclxuXHJcbmV4cG9ydCB7c2V0U3RvcmFnZSwgZ2V0U3RvcmFnZX0iLCIvL9Cn0LjRgdC10LvQsCDQsiDQstCw0LvRjtGC0YNcclxuZnVuY3Rpb24gdG9DdXJyZW5jeShudW0pIHtcclxuICAgIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQgKCd1YS1VQScsIHtcclxuICAgICAgICBjdXJyZW5jeTogJ3VhaCcsXHJcbiAgICAgICAgc3R5bGU6ICdjdXJyZW5jeSdcclxuICAgIH0pLmZvcm1hdChudW0pXHJcbn1cclxuXHJcbi8v0J3QsNGB0YLRgNC+0LnQutCwINC+0YLQvtCx0YDQsNC20LXQvdC40Y8g0LTQsNGC0YtcclxuZnVuY3Rpb24gdG9EYXRlKGRhdGUpIHtcclxuICAgIHJldHVybiBuZXcgSW50bC5EYXRlVGltZUZvcm1hdCgndWEtVUEnLCB7XHJcbiAgICAgICAgZGF5OiAnMi1kaWdpdCcsXHJcbiAgICAgICAgbW9udGg6ICdsb25nJyxcclxuICAgICAgICB5YWVyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgaG91cjogJzItZGlnaXQnLFxyXG4gICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgIHNlY29uZDogJzItZGlnaXQnXHJcbiAgICB9KS5mb3JtYXQobmV3IERhdGUoZGF0ZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvRGVzaXJlZEZvcm1hdCgpIHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXJyZW5jeScpLmZvckVhY2goIHZhbHVlID0+IHtcclxuICAgICAgICBjb25zdCBwcmljZSA9IHBhcnNlRmxvYXQodmFsdWUudGV4dENvbnRlbnQpO1xyXG4gICAgICAgIHZhbHVlLnRleHRDb250ZW50ID0gdG9DdXJyZW5jeShwcmljZSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcmRlcnNfX2RhdGUnKS5mb3JFYWNoKCBub2RlID0+IHtcclxuICAgICAgICBub2RlLnRleHRDb250ZW50ID0gdG9EYXRlKG5vZGUudGV4dENvbnRlbnQpXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQge3RvQ3VycmVuY3ksIHRvRGF0ZSwgdG9EZXNpcmVkRm9ybWF0fSJdLCJzb3VyY2VSb290IjoiIn0=