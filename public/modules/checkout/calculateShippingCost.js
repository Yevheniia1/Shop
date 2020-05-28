import {toCurrency} from '../utils.js';


//Подстчет стоимости доставки

function calculateShippingCost() {
    try{
        const checkoutForm = document.forms.checkout;
        const shippingOptions = [...checkoutForm.elements.shipping];
        const payment = checkoutForm.elements.payment.value;
        const city = document.querySelector('.js-citiesAutocomplete').value;
        const cartTotal = parseFloat(document.querySelector('.js-checkout__cart-total').innerHTML);
        const checkedOption = shippingOptions.find( option => option.checked === true);
        const checkedOptionName = checkedOption.id;
        const csrf = document.getElementById('csrf').value;
        console.log(city, payment, cartTotal, checkedOptionName)
        
        if(city && payment && cartTotal && checkedOptionName) {
            fetch('/checkout/calculate', {
                method: 'POST',
                headers: {
                    'X-XSRF-TOKEN': csrf, 
                    'Content-Type': 'application/json; charset=utf-8'
                    },
                body: JSON.stringify({
                    city, payment, cartTotal, checkedOptionName
                })
            })
            .then(res => res.json())
            .then(obj => {
                const totalContainer = document.querySelector('.js-checkout__total');
                const deliveryCostContainer = document.querySelector('.js-checkout__deliveryCost');
                const redeliveryCost = obj.data[0].CostRedelivery;
                let deliveryCost;

                if(redeliveryCost) {
                    deliveryCost = obj.data[0].Cost + redeliveryCost
                } else {
                    deliveryCost = obj.data[0].Cost;
                }
                const total = deliveryCost + obj.data[0].AssessedCost;

                totalContainer.innerHTML = toCurrency(total);
                deliveryCostContainer.innerHTML = toCurrency(deliveryCost);
            })
            .catch(err => console.log(err))
        }
    } catch(err) {
        console.log(err)
    }
}

export {calculateShippingCost};