export function initMediasListener(photographer) {
    const imagesVideosMedias = document.querySelectorAll('.media img, .media video');
    imagesVideosMedias.forEach((media) => media.addEventListener('click', (event) => {
        const index = event.target.getAttribute('data-index');
        showModalMedia(index, photographer);
    }));

    const closeModalMediaIcons = document.querySelector('.close-modal-media');
    closeModalMediaIcons.addEventListener('click', closeModalMedia);
}

const modalMedia = document.querySelector('#medias-modal');
const mediaContent = document.querySelector('.media-content');
const mediaTitle = document.querySelector('.media-title h3');
function showModalMedia(index, photographer) {
    const media = photographer.getMediaByIndex(index);
    mediaContent.innerHTML = media.displayMedia();
    mediaTitle.innerHTML = media.title;
    modalMedia.style.display = 'flex';
}

function closeModalMedia() {
    modalMedia.style.display = 'none';
}

