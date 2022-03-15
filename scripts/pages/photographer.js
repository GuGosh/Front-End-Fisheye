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
}

const photographer = await init();

initModalListener();

initLikesIconListener(photographer);

const containerSelectOption = document.querySelector('.container-select-option');
const selectOption = document.querySelector('.selected-option');
const spanOptions = document.querySelectorAll('span.option-filtre');
const otherOptions = document.querySelector('.other-options');
let listOpen = false;
spanOptions.forEach((span) => span.addEventListener('click', (event) => {
    if (listOpen == true) {
        const medias = document.querySelector('.medias-photographer');
        medias.remove();
        const option = event.target.getAttribute('data-option');
        photographer.filterMedias(option);
        const userCardDOM = photographer.getSinglePhotograherMediasDom();
        Photographer.singlePhotographerSection.insertAdjacentHTML('beforeend', userCardDOM);
        initLikesIconListener(photographer);
        otherOptions.classList.add('hide');
        selectOption.innerHTML = event.target.innerHTML;
        selectOption.setAttribute('data-option', option);
    }
}));

// filtre
containerSelectOption.addEventListener('click', () => {
    if (otherOptions.classList.contains('hide')) {
        otherOptions.classList.remove('hide');
        listOpen = true;
    } else {
        otherOptions.classList.add('hide');
        listOpen = false;
    }
});
