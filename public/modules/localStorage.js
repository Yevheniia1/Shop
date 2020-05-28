//ДОСТУП К ЛОКАЛЬНОМУ ХРАНИЛИЩУ

function setStorage(key, info) {
    window.localStorage.setItem(key, JSON.stringify(info));
    return getStorage(key)
}

function getStorage(key) {
    let item = window.localStorage.getItem(key);
    return JSON.parse(item)
}

export {setStorage, getStorage}