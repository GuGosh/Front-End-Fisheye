export function initModalListener() {
    // Ouverture / Fermeture de Modal
    const modal = document.getElementById('contact_modal');
    const buttonOpenModal = document.querySelectorAll('body .open-modal');
    const buttonCloseModal = document.querySelectorAll('body .close-modal');

    buttonOpenModal.forEach((element) => element.addEventListener('click', () => {
        displayModal(modal);
    }));

    buttonCloseModal.forEach((element) => element.addEventListener('click', closeModal));
}

function displayModal(modal) {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}
