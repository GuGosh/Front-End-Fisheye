import { displayModal, closeModal } from './modal.js';

const modalMedia = document.querySelector('#medias-modal');
const mediaContent = document.querySelector('.media-content');
const mediaTitle = document.querySelector('.media-title h3');

export function initMediasListener(photographer) {
    const imagesVideosMedias = document.querySelectorAll('.media img, .media video');
    imagesVideosMedias.forEach((media) => media.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        initModalMedia(index, photographer);
    }));

    const closeModalMediaIcons = document.querySelector('.close-modal-media');
    closeModalMediaIcons.addEventListener('click', () => {
        closeModal(modalMedia);
    });
}

function initModalMedia(index, photographer) {
    // function fillModalMedia()
    const media = photographer.getMediaByIndex(index);
    mediaContent.innerHTML = media.displayMedia(index, true);
    mediaTitle.innerHTML = media.title;
    displayModal(modalMedia);
}

