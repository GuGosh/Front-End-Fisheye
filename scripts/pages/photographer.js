import { Photographer } from './../classes/Photographer.js';
import { Api } from './../classes/Api.js';
import { initModalListener } from './../utils/contactForm.js';
import { initLikesIconListener } from './../utils/likes.js';

async function init() {
    const params = new URLSearchParams(document.location.search);
    const idPhotographer = parseInt(params.get('idPhotographer'));
    const photographer = await Api.getPhotographer(idPhotographer)
    const userCardDOM = photographer.getSinglePhotograherDom();
    Photographer.singlePhotographerSection.insertAdjacentHTML('beforeend', userCardDOM);
    const photographer_name_contact = document.querySelector('#contact_modal .photographer-name');
    photographer_name_contact.innerHTML = photographer.name;

    return photographer;
};

const photographer = await init();

initModalListener();

initLikesIconListener(photographer);

// filtre
const selectFiltre = document.getElementById('liste-filtre');
selectFiltre.addEventListener('change', (event) => {
    const medias = document.querySelector('.medias-photographer');
    medias.remove();
    const filter_medias = photographer.filterMedias(event.target.value);
    const userCardDOM = photographer.getSinglePhotograherMediasDom();
    Photographer.singlePhotographerSection.insertAdjacentHTML('beforeend', userCardDOM);
    initLikesIconListener(photographer);
});
