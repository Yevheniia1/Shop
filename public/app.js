const PRICE_LIST = document.querySelectorAll('.product__price');

PRICE_LIST.forEach( (productPrice) => {
    const PRICE = parseFloat(productPrice.textContent);
    productPrice.textContent = new Intl.NumberFormat('ua-UA', {
        currency: 'uah',
        style: 'currency'
    }).format(PRICE)
})


