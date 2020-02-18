
//Инициализация табов (на странице авторизации)
const $loginPage = document.querySelector('.auth');
if($loginPage) {
    M.Tabs.init(document.querySelectorAll('.tabs')); 
}

//Отображение в валюте
function toCurrency(num) {
    return new Intl.NumberFormat('ua-UA', {
        currency: 'uah',
        style: 'currency'
    }).format(num)
}

//Настройка отображения даты
const toDate = date => {
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

document.querySelectorAll('.currency').forEach( value => {
    const price = parseFloat(value.textContent);
    value.textContent = toCurrency(price)
})

//Динамическая перерисовка корзины для удаления товаров

const $cart = document.getElementById('cart');

if($cart) {
    $cart.addEventListener('click', (e) => {
        if(e.target.classList.contains('js-remove')) {
           
            const id = e.target.dataset.id,
                  csrf = e.target.dataset.csrf;
    
            fetch('cart/remove/' + id, {
                method: 'delete',
                headers: {
                    'X-XSRF-TOKEN': csrf,
                }
            })
            .then(res => res.json())
            .then(cart => {
                if(cart.products.length) {
                    const html = cart.products.map( p => {
                        return `
                        <tr>
                            <td>${p.title}</td>
                            <td>${p.quantity}</td>
                            <td>${p.price}</td>
                            <td>
                                <button type="button" class="btn btn-small js-remove" data-id="${p.id}">Удалить</button>
                            </td>
                        </tr>
                        `
                    }).join('');
                    $cart.querySelector('tbody').innerHTML = html;
                    $cart.querySelector('.product__price').innerHTML = toCurrency(cart.price);
                } else {
                    $cart.innerHTML = '<p>Товаров в корзине пока нет</p>'
                }
            })
    
        }
    })
}


