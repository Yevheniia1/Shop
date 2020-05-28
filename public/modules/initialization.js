import {getWarehousesNP} from './checkout/getWarehousesNP.js';

//ИНИЦИАЛИЗАЦИЯ ЭЛЕМЕНТОВ НА СТРАНИЦЕ
function initializationElems() {
    M.AutoInit();

    if(document.querySelector('.glide')) {
    
        let glide = new Glide('.glide', {
            type: 'carousel',
            perView: 4,
            focusAt: 'center',
            breakpoints: {
              800: {
                perView: 2
              },
              480: {
                perView: 1
              }
            }
          })
          
          glide.mount()
    }    
}

// Инициализация аккордеона и его типа

function checkoutCollapsibleInit() {
  const checkout = document.getElementById('checkout');
  const checkoutCollapsible = checkout.querySelector('.checkout__collapsible');
  const checkoutCollapsibleInit = M.Collapsible.init(checkoutCollapsible, {
        accordion: false
    });
  const checkoutCollapsibleInstance = M.Collapsible.getInstance(checkoutCollapsible);

  return checkoutCollapsibleInstance;
}

function citiesAutocompleteInput() {
    const csrf = document.getElementById('csrf').value;
    let citiesInput, initializationCitiesInput;
    let citiesAutocompleteOptions = {
        minLength: 2,
        onAutocomplete: getWarehousesNP
    }; 
    fetch('/checkout', {
        method: 'post',
        headers: {
            'X-XSRF-TOKEN': csrf, 
            'Content-Type': 'application/json; charset=utf-8'
        }
    })
    .then(res => res.json())
    .then(options => {
        citiesAutocompleteOptions.data = JSON.parse(options)
        citiesInput = document.querySelector('.js-citiesAutocomplete');
        initializationCitiesInput = M.Autocomplete.init(citiesInput, citiesAutocompleteOptions);
    })
    .catch(err => console.log(err))
}


export {initializationElems, checkoutCollapsibleInit, citiesAutocompleteInput}
