export function displayModal(modal) {
    modal.classList.remove('hide');
    modal.setAttribute('aria-hidden', false);
}

export function closeModal(modal) {
    modal.classList.add('hide');
    modal.setAttribute('aria-hidden', true);
}