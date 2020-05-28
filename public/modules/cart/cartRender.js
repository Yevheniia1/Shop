import {toCurrency, toDate, toDesiredFormat} from '../utils.js';

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
                    <p class="currency product__price">${toCurrency(p.price)}</p>
                </td>
            </tr>
            `
        }).join('');
        
        cartTable.querySelector('tbody').innerHTML = html;
        cartTable.querySelector('.js-cart__total').innerHTML = toCurrency(cart.price);

        // const quantityInputs = document.querySelectorAll(`.js-${user}ProductQuantity`);
       
    } else {
        cartTable.innerHTML = `
            <p>Товаров в корзине пока нет</p>
            <a href="/products" class="link link_accent">Вернуться к покупкам</a>
        `;
    }

    return cartTable;
}  


export {cartRender}