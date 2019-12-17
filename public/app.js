const PRICE_LIST = document.querySelectorAll('.product__price');

function toCurrency(num) {
    return new Intl.NumberFormat('ua-UA', {
        currency: 'uah',
        style: 'currency'
    }).format(num)
}

PRICE_LIST.forEach( (productPrice) => {
    const PRICE = parseFloat(productPrice.textContent);
    productPrice.textContent = toCurrency(PRICE)
})

const $cart = document.getElementById('cart');

$cart.addEventListener('click', (e) => {
    if(e.target.classList.contains('js-remove')) {
       
        const id = e.target.dataset.id;

        fetch('cart/remove/' + id, {
            method: 'delete'
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
