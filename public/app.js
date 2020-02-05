
//Инициализация табов (на странице авторизации)
M.Tabs.init(document.querySelectorAll('.tabs')); 

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

//Настройка отображения валюты
function toCurrency(num) {
    return new Intl.NumberFormat('ua-UA', {
        currency: 'uah',
        style: 'currency'
    }).format(num)
}

document.querySelectorAll('.product__price').forEach( productPrice => {
    const PRICE = parseFloat(productPrice.textContent);
    productPrice.textContent = toCurrency(PRICE)
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
                        const price = toCurrency(p.price);
                        return `
                        <tr>
                            <td>${p.title}</td>
                            <td>${p.quantity}</td>
                            <td>${price}</td>
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



