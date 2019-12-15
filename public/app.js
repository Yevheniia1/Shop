const PRICE_LIST = document.querySelectorAll('.card-price');

PRICE_LIST.forEach( (productPrice) => {
    const PRICE = parseFloat(item.textContent);
    item.textContent = new Intl.NumberFormat('ua-UA', {
        currency: 'uah',
        style: 'currency'
    }).format(PRICE)
})


