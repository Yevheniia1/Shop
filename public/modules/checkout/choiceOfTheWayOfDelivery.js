import {renderShippingForm} from './renderShippingForm.js';

//Выбор способа доставки    
function choiceOfTheWayOfDelivery() {
    const npDepartment = document.getElementById('npDepartment');
    const npAddress = document.getElementById('npAddress');
    const ukrposhta = document.getElementById('ukrposhta');
    
    npDepartment.addEventListener('change', renderShippingForm);
    npAddress.addEventListener('change', renderShippingForm);
    ukrposhta.addEventListener('change', renderShippingForm);
}

export {choiceOfTheWayOfDelivery};