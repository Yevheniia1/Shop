
import {toCurrency, toDate, toDesiredFormat} from './modules/utils.js';
import {initializationElems} from './modules/initialization.js';

// //localStorage
// import {setStorage, getStorage} from './modules/localStorage.js';
// import {createGuestProfile, getGuestProfile} from './modules/guestProfile.js';

//Cart
import {toGuestCart, guestAddToCartHandler} from './modules/cart/guestCart.js';

//Checkout
import {choiceOfTheWayOfDelivery} from './modules/checkout/choiceOfTheWayOfDelivery.js';
import {getWarehousesNP} from './modules/checkout/getWarehousesNP.js';
import {checkoutCollapsibleInit, citiesAutocompleteInput} from './modules/initialization.js';
import {calculateShippingCost} from './modules/checkout/calculateShippingCost.js';

initializationElems(); //ИНИЦИАЛИЗАЦИЯ ЭЛЕМЕНТОВ НА СТРАНИЦЕ
toDesiredFormat(); //Преобразование данных в требуемый формат

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

    const {userChangeTotalPrice, userRemoveProductHandler} = await import('./modules/cart/userCart.js');
    const userChangeQuantity = document.querySelectorAll('.js-userProductQuantity');
    const userRemoveProduct =  document.querySelectorAll('.js-remove-user');
    
    //Изменения количества в корзине для авторизированного пользователя
    userChangeQuantity.forEach( i => i.addEventListener('change', userChangeTotalPrice))

    //Удаление товара из корзины для авторизированного пользователя
    userRemoveProduct.forEach( b => b.addEventListener('click', userRemoveProductHandler))
}

async function loadGuestCart() {
    const {toGuestCart, guestChangeTotalPrice, guestAddToCartHandler, guestRemoveProductHandler} = await import('./modules/cart/guestCart.js');
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
    productCardContainer.addEventListener('click', guestAddToCartHandler)
} 

//Ссылка на корзину неавторизированного пользователя
const  linkGuestCart = document.querySelectorAll('.js-toGuestCart');
if(linkGuestCart) {
    linkGuestCart.forEach( item => item.addEventListener('click', toGuestCart))
}

//--ОФОРМЛЕНИЕ ЗАКАЗА--

const checkout = document.getElementById('checkout');

if(checkout) {

    //Инициализация акардеона для заполнения формы
    const checkoutCollapsibleInstance = checkoutCollapsibleInit();

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
            choiceOfTheWayOfDelivery();

            //Загрузка списка городов новой почты
            citiesAutocompleteInput();

            //Изменение формы оплаты товара
            changePaymentHandler()
        }

        async function controlCollapsible() {
            const {renderShippingForm} = await import('./modules/checkout/renderShippingForm.js');
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

            paymentContainer.addEventListener('change', calculateShippingCost)
        }
    })
}
