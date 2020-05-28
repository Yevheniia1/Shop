(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./public/modules/checkout/renderShippingForm.js":
/*!*******************************************************!*\
  !*** ./public/modules/checkout/renderShippingForm.js ***!
  \*******************************************************/
/*! exports provided: renderShippingForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderShippingForm", function() { return renderShippingForm; });
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
          renderInputsId = shippingInputs[checkedOption.value],
          container = document.querySelector('.form-fragment');
    const renderInputs = renderInputsId.map( id => document.querySelector(`[data-shipping=${id}]`));
    const renderInputsClones = renderInputs.map( input => {
        const clone = input.cloneNode(true);
        clone.querySelector('.js-required').required = true;
        return clone
    });
    container.innerHTML = '';
    renderInputsClones.forEach( input => container.append(input))
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wdWJsaWMvbW9kdWxlcy9jaGVja291dC9yZW5kZXJTaGlwcGluZ0Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RixHQUFHO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsImZpbGUiOiIxLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8v0J/QvtC70Y8g0LTQu9GPINC30LDQv9C+0LvQvdC10L3QuNGPINC00LvRjyDQutC+0L3QutGA0LXRgtC90L7Qs9C+INCy0LjQtNCwINC00L7RgdGC0LDQstC60LhcclxuY29uc3Qgc2hpcHBpbmdJbnB1dHMgPSB7XHJcbiAgICBucERlcGFydG1lbnQ6IFsnZGVwYXJ0bWVudCddLFxyXG4gICAgbnBBZGRyZXNzOiBbJ2xvY2FsaXR5JywgJ3N0cmVldCcsICdhcGFydG1lbnQnXSxcclxuICAgIHVrcnBvc2h0YTogWydsb2NhbGl0eScsICdwb3N0YWwtY29kZSddLFxyXG59XHJcblxyXG5jb25zdCBjaGVja291dEZvcm0gPSBkb2N1bWVudC5mb3Jtcy5jaGVja291dDtcclxuXHJcbi8v0KDQtdC90LTQtdGAINGC0YDQtdCx0YPQtdC80YvRhSDQv9C+0LvQtdC5INC00LvRjyDQsNC00YDQtdGB0LBcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclNoaXBwaW5nRm9ybSgpIHtcclxuICAgIGNvbnN0IHNoaXBwaW5nT3B0aW9ucyA9IFsuLi5jaGVja291dEZvcm0uZWxlbWVudHMuc2hpcHBpbmddLFxyXG4gICAgICAgICAgY2hlY2tlZE9wdGlvbiA9ICBzaGlwcGluZ09wdGlvbnMuZmluZCggb3B0aW9uID0+IG9wdGlvbi5jaGVja2VkID09PSB0cnVlKSxcclxuICAgICAgICAgIHJlbmRlcklucHV0c0lkID0gc2hpcHBpbmdJbnB1dHNbY2hlY2tlZE9wdGlvbi52YWx1ZV0sXHJcbiAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1mcmFnbWVudCcpO1xyXG4gICAgY29uc3QgcmVuZGVySW5wdXRzID0gcmVuZGVySW5wdXRzSWQubWFwKCBpZCA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1zaGlwcGluZz0ke2lkfV1gKSk7XHJcbiAgICBjb25zdCByZW5kZXJJbnB1dHNDbG9uZXMgPSByZW5kZXJJbnB1dHMubWFwKCBpbnB1dCA9PiB7XHJcbiAgICAgICAgY29uc3QgY2xvbmUgPSBpbnB1dC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgY2xvbmUucXVlcnlTZWxlY3RvcignLmpzLXJlcXVpcmVkJykucmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIHJldHVybiBjbG9uZVxyXG4gICAgfSk7XHJcbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICByZW5kZXJJbnB1dHNDbG9uZXMuZm9yRWFjaCggaW5wdXQgPT4gY29udGFpbmVyLmFwcGVuZChpbnB1dCkpXHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyU2hpcHBpbmdGb3JtfTsiXSwic291cmNlUm9vdCI6IiJ9