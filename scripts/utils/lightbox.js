import { displayModal, closeModal } from './modal.js';

const modalMedia = document.querySelector('#medias-modal');
const mediaContent = document.querySelector('.media-content');
const mediaTitle = document.querySelector('.media-title h3');

let index = 0;

export function initMediasListener(photographer) {
    const imagesVideosMedias = document.querySelectorAll('.media img, .media video');
    imagesVideosMedias.forEach((media) => media.addEventListener('click', (event) => {
        index = parseInt(event.target.getAttribute('data-index'));
        initModalMedia(index, photographer);
    }));

    const closeModalMediaIcons = document.querySelector('.close-modal-media');
    closeModalMediaIcons.addEventListener('click', () => {
        closeModal(modalMedia);
    });

    const arrowNextMedia = document.querySelector('.next');
    arrowNextMedia.addEventListener('click', () => {
        showNextMedia(photographer);
    })

    const arrowPreviousMedia = document.querySelector('.previous');
    arrowPreviousMedia.addEventListener('click', () => {
        showPreviousMedia(photographer);
    })

    document.addEventListener('keyup', (event) => {
        if (!modalMedia.classList.contains('hide')) {
            if (event.key == 'Escape') {
                closeModal(modalMedia);
            } else if (event.key == 'ArrowRight') {
                showNextMedia(photographer);
            } else if (event.key == 'ArrowLeft') {
                showPreviousMedia(photographer);
            }
        }
    });
}

function showNextMedia(photographer) {
    index = index + 1;
    if (photographer.medias.length == index) {
        index = 0
    }
    fillModalMedia(index, photographer);
}

function showPreviousMedia(photographer) {
    index = index - 1
    if (index == -1) {
        index = photographer.medias.length - 1;
    }
    fillModalMedia(index, photographer);
}

function fillModalMedia(index, photographer) {
    const media = photographer.getMediaByIndex(index);
    mediaContent.innerHTML = media.displayMedia(index, true);
    mediaTitle.innerHTML = media.title;
}

function initModalMedia(index, photographer) {
    fillModalMedia(index, photographer)
    displayModal(modalMedia);
}

