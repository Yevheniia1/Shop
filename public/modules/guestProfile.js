import {setStorage, getStorage} from './localStorage.js';

async function createGuestProfile(csrf) {
    return fetch("/cart/create-token", {
        method: 'post',
        headers: {
            'X-XSRF-TOKEN': csrf,
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
    .then(res => res.json())
    .then(profile => setStorage('guestProfile', profile))
}

function getGuestProfile(csrf) {
    return getStorage('guestProfile') ? getStorage('guestProfile') : createGuestProfile(csrf)
}

export {createGuestProfile, getGuestProfile}