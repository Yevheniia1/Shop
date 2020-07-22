//Чисела в валюту
function toCurrency(num) {
    return new Intl.NumberFormat ('ua-UA', {
        currency: 'uah',
        style: 'currency'
    }).format(num)
}

//Настройка отображения даты
function toDate(date) {
    return new Intl.DateTimeFormat('ua-UA', {
        day: '2-digit',
        month: 'long',
        yaer: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    }).format(new Date(date))
}

function toDesiredFormat() {
    document.querySelectorAll('.currency').forEach( value => {
        const price = parseFloat(value.textContent);
        value.textContent = toCurrency(price)
    })
    
    // document.querySelectorAll('.orders__date').forEach( node => {
    //     node.textContent = toDate(node.textContent)
    // })
}

export {toCurrency, toDate, toDesiredFormat}