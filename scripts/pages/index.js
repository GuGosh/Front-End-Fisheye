import { Photographer } from './../classes/Photographer.js';
import { Api } from './../classes/Api.js';

async function init() {
    const photographers = await Api.getPhotographers();
    photographers.forEach((photographer) => {
        const userCardDOM = photographer.getUserCardDOM();
        Photographer.photographersSection.insertAdjacentHTML('beforeend', userCardDOM);
    });
};

init();
