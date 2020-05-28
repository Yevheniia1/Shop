(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./public/modules/cart/userCart.js":
/*!*****************************************!*\
  !*** ./public/modules/cart/userCart.js ***!
  \*****************************************/
/*! exports provided: userChangeTotalPrice, userRemoveProductHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userChangeTotalPrice", function() { return userChangeTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRemoveProductHandler", function() { return userRemoveProductHandler; });
/* harmony import */ var _cartRender_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cartRender.js */ "./public/modules/cart/cartRender.js");


function userChangeTotalPrice(e) {
     const quantity = +e.target.value,
           productId = e.target.dataset.id,
           csrf = e.target.dataset.csrf;

     fetch('/cart/update', {
         method: 'post',
         headers: {
             'X-XSRF-TOKEN': csrf,
             'Content-Type': 'application/json; charset=utf-8'
         },
         body: JSON.stringify({
             productId, quantity
         })
     })
     .then( res => window.location.replace('/cart'))
 }

//Удаление товара из корзины
function userRemoveProductHandler(e) {
    const id = e.target.dataset.id,
          csrf = e.target.dataset.csrf;
    fetch('/cart/remove/' + id, {
        method: 'delete',
        headers: {
            'X-XSRF-TOKEN': csrf, 
        }
    })
    .then(res => res.json())
    .then(cart => Object(_cartRender_js__WEBPACK_IMPORTED_MODULE_0__["cartRender"])(cart, 'user'))
    .then( cartTable => {
        if(cartTable.querySelector('.cart-product')) {
            const userChangeQuantity = document.querySelectorAll('.js-userProductQuantity'),
                  userRemoveProduct = document.querySelectorAll('.js-remove-user');

            userRemoveProduct.forEach( b => b.addEventListener('click', userRemoveProductHandler))
            userChangeQuantity.forEach( i => i.addEventListener('change', userChangeTotalPrice))
        }
    })
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbW9kdWxlcy9jYXJ0L3VzZXJDYXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0MsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLGlFQUFVO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCIsImZpbGUiOiIwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y2FydFJlbmRlcn0gZnJvbSAnLi9jYXJ0UmVuZGVyLmpzJztcclxuXHJcbmZ1bmN0aW9uIHVzZXJDaGFuZ2VUb3RhbFByaWNlKGUpIHtcclxuICAgICBjb25zdCBxdWFudGl0eSA9ICtlLnRhcmdldC52YWx1ZSxcclxuICAgICAgICAgICBwcm9kdWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICAgICAgIGNzcmYgPSBlLnRhcmdldC5kYXRhc2V0LmNzcmY7XHJcblxyXG4gICAgIGZldGNoKCcvY2FydC91cGRhdGUnLCB7XHJcbiAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAnWC1YU1JGLVRPS0VOJzogY3NyZixcclxuICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOCdcclxuICAgICAgICAgfSxcclxuICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgcHJvZHVjdElkLCBxdWFudGl0eVxyXG4gICAgICAgICB9KVxyXG4gICAgIH0pXHJcbiAgICAgLnRoZW4oIHJlcyA9PiB3aW5kb3cubG9jYXRpb24ucmVwbGFjZSgnL2NhcnQnKSlcclxuIH1cclxuXHJcbi8v0KPQtNCw0LvQtdC90LjQtSDRgtC+0LLQsNGA0LAg0LjQtyDQutC+0YDQt9C40L3Ri1xyXG5mdW5jdGlvbiB1c2VyUmVtb3ZlUHJvZHVjdEhhbmRsZXIoZSkge1xyXG4gICAgY29uc3QgaWQgPSBlLnRhcmdldC5kYXRhc2V0LmlkLFxyXG4gICAgICAgICAgY3NyZiA9IGUudGFyZ2V0LmRhdGFzZXQuY3NyZjtcclxuICAgIGZldGNoKCcvY2FydC9yZW1vdmUvJyArIGlkLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdYLVhTUkYtVE9LRU4nOiBjc3JmLCBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihjYXJ0ID0+IGNhcnRSZW5kZXIoY2FydCwgJ3VzZXInKSlcclxuICAgIC50aGVuKCBjYXJ0VGFibGUgPT4ge1xyXG4gICAgICAgIGlmKGNhcnRUYWJsZS5xdWVyeVNlbGVjdG9yKCcuY2FydC1wcm9kdWN0JykpIHtcclxuICAgICAgICAgICAgY29uc3QgdXNlckNoYW5nZVF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLXVzZXJQcm9kdWN0UXVhbnRpdHknKSxcclxuICAgICAgICAgICAgICAgICAgdXNlclJlbW92ZVByb2R1Y3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtcmVtb3ZlLXVzZXInKTtcclxuXHJcbiAgICAgICAgICAgIHVzZXJSZW1vdmVQcm9kdWN0LmZvckVhY2goIGIgPT4gYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVzZXJSZW1vdmVQcm9kdWN0SGFuZGxlcikpXHJcbiAgICAgICAgICAgIHVzZXJDaGFuZ2VRdWFudGl0eS5mb3JFYWNoKCBpID0+IGkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdXNlckNoYW5nZVRvdGFsUHJpY2UpKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCB7dXNlckNoYW5nZVRvdGFsUHJpY2UsIHVzZXJSZW1vdmVQcm9kdWN0SGFuZGxlcn0iXSwic291cmNlUm9vdCI6IiJ9