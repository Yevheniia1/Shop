import {createGuestProfile, getGuestProfile} from '../guestProfile.js';
import {cartRender} from './cartRender.js';
import {setStorage, getStorage} from '../localStorage.js';
import {toCurrency, toDate, toDesiredFormat} from '../utils.js';
import {mergeCarts} from './mergeCarts.js';


//Редирект на корзину 
async function toGuestCart(e) {
    e.preventDefault();
    const csrf = this.dataset.csrf,
          guestProfile = await getGuestProfile(csrf),
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
    cartTable.querySelector('.js-cart__total').innerHTML = toCurrency(total);
}


//Пересчет и сохранение общей стоимости корзины
function guestChangeTotalPrice(e) {
    const guestProfile = getStorage('guestProfile');
    const csrf = e.target.dataset.csrf;

    //Обновление localStorage
    const id = e.target.dataset.id;
    const product = guestProfile.data.products.find( p => p.id.toString() === id.toString());
    product.quantity = +e.target.value;
    setStorage('guestProfile', guestProfile)

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

            const guestProfile = await getGuestProfile(csrf);

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
                guestProfile.data.products = mergeCarts(guestProfile.data.products, product)
                setStorage('guestProfile', guestProfile)
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
    const guestProfile = await getGuestProfile(csrf);
    guestProfile.data.products = guestProfile.data.products.filter( p => p.id.toString() !== id.toString() )
    setStorage('guestProfile', guestProfile)

    fetch(`/cart/remove/${guestProfile.data.token}/${id}`, {
        method: 'post',
        headers: {
            'X-XSRF-TOKEN': csrf,
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(guestProfile)
    })
    .then(res => res.json())
    .then(cart => cartRender(cart, 'guest'))
    .then(cartTable => {
        if(cartTable.querySelector('.cart-product')) {
            const guestChangeQuantity = document.querySelectorAll('.js-guestProductQuantity'),
                    guestRemoveProduct = document.querySelectorAll('.js-remove-guest');

            guestChangeQuantity.forEach( q => q.addEventListener('change', guestChangeTotalPrice));
            guestRemoveProduct.forEach( b => b.addEventListener('click', guestRemoveProductHandler))
        }
    })
}


export {toGuestCart, guestChangeTotalPrice, guestAddToCartHandler, guestRemoveProductHandler}