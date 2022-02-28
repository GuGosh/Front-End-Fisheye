import { Photographer } from './../classes/Photographer.js';
import { Api } from './../classes/Api.js';

async function init() {
    const params = new URLSearchParams(document.location.search);
    const idPhotographer = parseInt(params.get('idPhotographer'));
    const photographer = await Api.getPhotographer(idPhotographer)
    const userCardDOM = photographer.getSinglePhotograherDom();
    Photographer.singlePhotographerSection.insertAdjacentHTML('beforeend', userCardDOM);
    const photographer_name_contact = document.querySelector('#contact_modal .photographer-name');
    photographer_name_contact.innerHTML = photographer.name;

    return photographer
};

const photographer = await init();

// Increment nb likes
const iconsHeart = document.querySelectorAll('.icon-heart');

iconsHeart.forEach((icon) => icon.addEventListener('click', (event) => {
    addLike(event.target);
}));

function addLike(domElement) {
    const idMedia = domElement.parentNode.parentNode.parentNode.id;
    const media = photographer.getMedia(idMedia);
    media.likes++;
    const html = domElement.previousSibling.previousSibling;
    html.innerHTML = media.likes;

    const globalLikes = document.querySelector('#global-likes');
    globalLikes.innerHTML = parseInt(globalLikes.innerHTML) + 1;
}

const modal = document.getElementById('contact_modal');
const buttonOpenModal = document.querySelectorAll('body .open-modal');
const buttonCloseModal = document.querySelectorAll('body .close-modal');

buttonOpenModal.forEach((element) => element.addEventListener('click', displayModal));

buttonCloseModal.forEach((element) => element.addEventListener('click', closeModal));

function displayModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}



