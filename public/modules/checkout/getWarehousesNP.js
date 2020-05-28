import {calculateShippingCost} from './calculateShippingCost.js';

function getWarehousesNP() {
    const container = document.querySelector('.js-npWarehouses');
    container.innerHTML = '';
    const csrf = document.getElementById('csrf').value;
    const citiesInput = document.querySelector('.js-citiesAutocomplete');
    const selectedCity = citiesInput.value;
    calculateShippingCost()

    fetch('/checkout/shipping', {
    method: 'POST',
    headers: {
        'X-XSRF-TOKEN': csrf, 
        'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({ selectedCity })
    })
    .then(res => res.json())
    .then(warehouses => {
        if(warehouses.length === 0) container.insertAdjacentHTML('beforeend', `<option disabled selected>Отделение не работает</option>`)
        warehouses.forEach( item => {
        container.insertAdjacentHTML('beforeend', `<option value="${item}">${item}</option>`)
        })
    })
}

export {getWarehousesNP};