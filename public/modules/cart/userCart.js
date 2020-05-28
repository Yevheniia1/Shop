import {cartRender} from './cartRender.js';

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
    .then(cart => cartRender(cart, 'user'))
    .then( cartTable => {
        if(cartTable.querySelector('.cart-product')) {
            const userChangeQuantity = document.querySelectorAll('.js-userProductQuantity'),
                  userRemoveProduct = document.querySelectorAll('.js-remove-user');

            userRemoveProduct.forEach( b => b.addEventListener('click', userRemoveProductHandler))
            userChangeQuantity.forEach( i => i.addEventListener('change', userChangeTotalPrice))
        }
    })
}

export {userChangeTotalPrice, userRemoveProductHandler}