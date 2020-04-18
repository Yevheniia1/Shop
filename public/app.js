
//ИНИЦИАЛИЗАЦИЯ ЭЛЕМЕНТОВ НА СТРАНИЦЕ

M.AutoInit();

// // Табы (на странице авторизации)
// const $loginPage = document.querySelector('.auth');
// const $guestOrder = document.querySelector('.guest-order')
// if($loginPage || $guestOrder) {
//     M.Tabs.init(document.querySelectorAll('.tabs'), {
//         swipeable: true
//     }); 
// }

// //Sidenav
// document.addEventListener('DOMContentLoaded', function() {
//     let elems = document.querySelectorAll('.sidenav');
//     let instances = M.Sidenav.init(elems);
// });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });


//ФОРМАТИРОВАНИЕ 

//Чисел в валюту
function toCurrency(num) {
    return new Intl.NumberFormat ('ua-UA', {
        currency: 'uah',
        style: 'currency'
    }).format(num)
}

document.querySelectorAll('.currency').forEach( value => {
    const price = parseFloat(value.textContent);
    value.textContent = toCurrency(price)
})

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

document.querySelectorAll('.orders__date').forEach( node => {
    node.textContent = toDate(node.textContent)
})

//ДОСТУП К ЛОКАЛЬНОМУ ХРАНИЛИЩУ

function setStorage(key, info) {
    window.localStorage.setItem(key, JSON.stringify(info));
    return getStorage(key)
}

function getStorage(key) {
    let item = window.localStorage.getItem(key);
    return JSON.parse(item)
}

//НЕАВТОРИЗИРОВАННЫЕ ПОЛЬЗОВАТЕЛИ

//--КОРЗИНА--

const $productCardContainer = document.querySelector('.product-cards');

//Вспомогательные функции
function mergeCarts(products, addProduct) {
    const inCart = products.find(p => p.id.toString() === addProduct.id.toString() );
    if(inCart) {
        inCart.quantity = +inCart.quantity + +addProduct.quantity;
    } else {
        products.push(addProduct)
    }
    return products
}

function cartRender(cart, user) {
    if(cart.products.length) {
        const html = cart.products.map( p => {
            return `
            <tr>
                <td>${p.name}</td>
                <td><input type="number" value="${p.quantity}" data-id="${p.id}" data-csrf="${cart.csrf}" class="js-${user}ProductQuantity quantity" min="1"></td>
                <td class="currency cart-price">${p.price}</td>
                <td>
                    <button type="button" data-csrf="${cart.csrf}" class="btn btn-small js-remove-${user} btn-close" data-id="${p.id}"><i class="material-icons">close</i></button>
                </td>
            </tr>
            `
        }).join('');
        
        $cart.querySelector('tbody').innerHTML = html;
        $cart.querySelector('.product__price').innerHTML = toCurrency(cart.price);
    } else {
        $cart.innerHTML = '<p>Товаров в корзине пока нет</p>'
    }
}

function checkValidity(inputs) {
    let flag = true;
    inputs.forEach( input => {
        if(!input.validity.valid) {
            input.classList.add('invalid');
            flag = false;
        } 
    })
    return flag
}   

async function createGuestProfile(csrf) {
    return fetch("/cart/create-token/", {
        method: 'post',
        headers: {
            'X-XSRF-TOKEN': csrf,
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(res => res.json())
    .then(profile => setStorage('guestProfile', profile))
}

function getGuestProfile(csrf) {
    return getStorage('guestProfile') ? getStorage('guestProfile') : createGuestProfile(csrf)
}

//Ссылка на корзину неавторизированного пользователя
const $guestCartLink = document.querySelector('.js-guestCart'),
      $linkGuestCart = document.querySelectorAll('.js-toGuestCart');

async function toGuestCart(e) {
    e.preventDefault();
    const csrf = e.target.dataset.csrf,
          guestProfile = await getGuestProfile(csrf),
          token = guestProfile.data.token;

    window.location.replace(`/cart/${token}`)
}

if($guestCartLink) {
    $guestCartLink.addEventListener('click', toGuestCart)
}
if($linkGuestCart) {
    $linkGuestCart.forEach( item => item.addEventListener('click', toGuestCart))
}


//Создание корзины и добавление товаров для неавторизированных пользователей
async function addToCartHandler(e) {
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

if($productCardContainer) {
    $productCardContainer.addEventListener('click', addToCartHandler)
} 

//Динамическая перерисовка корзины
const $cart = document.getElementById('cart'),
      $guestQuantity = document.querySelectorAll('.js-guestProductQuantity'),
      $userQuantity = document.querySelectorAll('.js-userProductQuantity');

if($cart) {

    //Изменения количества в корзине для неавторизированного пользователя
    $guestQuantity.forEach( q => q.addEventListener('input', guestChangeTotalPrice))

    function guestChangeTotalPrice(e) {
        const guestProfile = getStorage('guestProfile');
        const products = [...document.querySelectorAll('.cart-product')];
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
        
        const totalPrice = products.reduce( (total, product) => {
            const priceElem = product.querySelector('.cart-price');
            const price = parseFloat(priceElem.innerHTML);
            const quantity = product.querySelector('.js-guestProductQuantity').value;

            return total += +price * +quantity
        }, 0)

        $cart.querySelector('.product__price').innerHTML = toCurrency(totalPrice);
    }

    //Изменения количества в корзине для авторизированного пользователя
    $userQuantity.forEach( q => q.addEventListener('input', userChangeTotalPrice))
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

    //Удаление товаров
    $cart.addEventListener('click', async (e) => {
        const id = e.target.dataset.id,
              csrf = e.target.dataset.csrf;

        if(e.target.classList.contains('js-remove-user')) {
            fetch('/cart/remove/' + id, {
                method: 'delete',
                headers: {
                    'X-XSRF-TOKEN': csrf,
                }
            })
            .then(res => res.json())
            .then(cart => cartRender(cart, 'user'))

        } else if(e.target.classList.contains('js-remove-guest')) {

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
        }
    })
}

//--ОФОРМЛЕНИЕ ЗАКАЗА--

const $guestCheckoutLink = document.querySelector('.js-order-guest'),
      $guestOrder = document.querySelector('.guest-order'),
      $checkout = document.querySelector('.checkout'),
      $ordersNavButton = document.querySelectorAll('.orders-nav'),
      $deliveryOptions = document.querySelectorAll('.delivery-option'),
      $npDepartment = document.getElementById('npDepartment'),
      $npAddress = document.getElementById('npAddress'),
      $ukrposhta = document.getElementById('ukrposhta');

const formContent = {
    npDepartment: ['locality', 'department'],
    npAddress: ['locality', 'street', 'apartment'],
    ukrposhta: ['locality', 'postal-code'],
}

//Рендер требуемых полей для доставки
function createForm(e) {
    const target = e.target,
          id = target.id,
          inputsId = formContent[id],
          container = document.querySelector('.form-fragment'),
          newContainer = document.createElement('div');

    newContainer.classList.add('form-fragment');

    inputsId.forEach( inputId => {
        const elem = document.getElementById(inputId).cloneNode(true);
        elem.querySelector('input').required = true;
        elem.id = undefined;
        newContainer.append(elem)
    })
    container.replaceWith(newContainer)
}

//Навигация по fieldset
function ordersNavHandler(e) {
    const target = e.target;
    const orderFieldsets = Array.from(document.querySelectorAll('.order-fieldset'));
    const direction = target.classList.contains('next') ? 'next' : 'prev';
    const fieldset = target.closest('.order-fieldset');
    const inputs = fieldset.querySelectorAll('input');
    const index = orderFieldsets.findIndex( item => item.id === fieldset.id);

    if(direction === 'next') {

        //Валидация заполненых полей перед переходом на следующий fieldset 
        if(checkValidity(inputs)){
            const nextFieldset = orderFieldsets[index+1];
            orderFieldsets.forEach( (item) => {
                item.classList.remove('active')
            })
            nextFieldset.classList.add('active')
        }
    } else if(direction === 'prev'){
        const prevFieldset = orderFieldsets[index-1];
        orderFieldsets.forEach( (item) => {
            item.classList.remove('active')
        })
        prevFieldset.classList.add('active')
    }
}

const orderSubmit = document.querySelector('.js-orderSubmit');

if($guestOrder) {

    // Обработчик для кнопки заказа
    orderSubmit.addEventListener('click', (e) => {
        const fieldset = e.target.closest('.order-fieldset');
        const inputs = fieldset.querySelectorAll('input');
    })

    //Навигация по fieldsets в форме для оформления заказа
    $ordersNavButton.forEach( button => button.addEventListener('click', ordersNavHandler) )

  
}

if($checkout) {
       //Выбор способа доставки    
       $npDepartment.addEventListener('change', createForm);
       $npAddress.addEventListener('change', createForm);
       $ukrposhta.addEventListener('change', createForm);
}

//Переход на страницу оформления заказа

if($guestCheckoutLink) {
    $guestCheckoutLink.addEventListener('click', (e) => {
        e.preventDefault();

        const csrf = e.target.dataset.csrf;
        const guestProfile = getGuestProfile(csrf);
        const token = guestProfile.data.token;

        fetch('/orders/' + token, {
            method: 'post',
            headers: {
                'X-XSRF-TOKEN': csrf,
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(guestProfile)
        })
        .then( res => window.location.replace(`/orders/${token}`))
    })
}





