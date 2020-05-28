
const cron = require('node-cron');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');
const keys = require('./keys');

let requestOptions = {
    cities: {
        "modelName": "Address",
        "calledMethod": "getCities",
        "apiKey": `${keys.NOVA_POSHTA}`
    },
    warehouses: {
        "modelName": "Address",
        "calledMethod": "getWarehouses",
        "apiKey": `${keys.NOVA_POSHTA}`
    }
}

function updateNovaPoshta() {

    //Запрос и запись отделений НП

    fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestOptions.warehouses)
        })
    .then(res => res.json())
    .then(novaPoshtaWarehouses => { return warehouses = novaPoshtaWarehouses.data.map( warehouse => {
        return {
            city: warehouse.CityDescription,
            warehouses: warehouse.Description
            }
        })
    })
    .then(warehouses => {
        return fs.writeFile(
            path.join(__dirname, 'data', 'nova-poshta', 'warehouses.json'),
            JSON.stringify(warehouses),
            (err) => {
                if(err) throw err
            }
        )
    })

    //Запрос и запись городов НП

    fetch('https://api.novaposhta.ua/v2.0/json/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestOptions.cities)
        })
    .then(res => res.json())
    .then(novaPoshtaCities => {
        const cities = [];
        novaPoshtaCities.data.forEach( item => 
            cities.push({
                city: item.Description,
                ref: item.Ref
            }))
        return cities
    })
    .then( cities => {
        return fs.writeFile(
            path.join(__dirname, 'data', 'nova-poshta', 'cities.json'),
            JSON.stringify(cities),
            (err) => {
                if(err) throw err
            }
        )
    })
    
}

//Обновление документа по воскресеньям

module.exports = cron.schedule('* * * * * 0', updateNovaPoshta);