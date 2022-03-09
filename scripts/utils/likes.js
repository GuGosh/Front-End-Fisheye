// ADD LIKE
export function initLikesIconListener(photographer) {
    const iconsHeart = document.querySelectorAll('.icon-heart');

    iconsHeart.forEach((icon) => icon.addEventListener('click', (event) => {
        addLike(event.target, photographer);
    }));
}


function addLike(domElement, photographer) {
    const idMedia = domElement.getAttribute('data-id');
    const media = photographer.getMedia(idMedia);
    media.likes++;
    const html = domElement.previousSibling.previousSibling;
    html.innerHTML = media.likes;

    const globalLikes = document.querySelector('#global-likes');
    globalLikes.innerHTML = parseInt(globalLikes.innerHTML) + 1;
}