import {calculateShippingCost} from './calculateShippingCost.js';
import {toCurrency} from '../utils.js';

//Поля для заполнения для конкретного вида доставки
const shippingInputs = {
    npDepartment: ['department'],
    npAddress: ['locality', 'street', 'apartment'],
    ukrposhta: ['locality', 'postal-code'],
}

const checkoutForm = document.forms.checkout;

//Рендер требуемых полей для адреса

function renderShippingForm() {
    const shippingOptions = [...checkoutForm.elements.shipping],
          checkedOption =  shippingOptions.find( option => option.checked === true),
          checkedOptionName = checkedOption.value,
          renderInputsId = shippingInputs[checkedOptionName],
          container = document.querySelector('.form-fragment');
    const renderInputs = renderInputsId.map( id => document.querySelector(`[data-shipping=${id}]`));
    const renderInputsClones = renderInputs.map( input => {
        const clone = input.cloneNode(true);
        clone.querySelector('.js-required').required = true;
        return clone
    });
    container.innerHTML = '';
    renderInputsClones.forEach( input => container.append(input))

    if(checkedOptionName === 'ukrposhta') {
        const totalContainer = document.querySelector('.js-checkout__total');
        const deliveryCostContainer = document.querySelector('.js-checkout__deliveryCost');
        const cartTotal = parseFloat(document.querySelector('.js-checkout__cart-total').innerHTML);
        const deliveryCost = 35;
        const total = deliveryCost + cartTotal;

        totalContainer.innerHTML = toCurrency(total);
        deliveryCostContainer.innerHTML = toCurrency(deliveryCost);
    } else {
        calculateShippingCost();
    }
    
}

export {renderShippingForm};