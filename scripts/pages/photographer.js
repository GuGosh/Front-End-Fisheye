import { Photographer } from './../classes/Photographer.js';
import { Api } from './../classes/Api.js';


// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/get

async function init() {
    const params = new URLSearchParams(document.location.search);
    const idPhotographer = parseInt(params.get('idPhotographer'));
    const photographer = await Api.getPhotographer(idPhotographer)
    const userCardDOM = photographer.getSinglePhotograherDom();
    Photographer.singlePhotographerSection.insertAdjacentHTML('beforeend', userCardDOM);
};

init();
