import { displayModal, closeModal } from './modal.js';

export function initModalListener() {
    // Ouverture / Fermeture de Modal
    const modal = document.getElementById('contact_modal');
    const buttonOpenModal = document.querySelectorAll('body .open-modal');
    const buttonCloseModal = document.querySelectorAll('body .close-modal');
    const contactForm = document.querySelector('#contact_modal form');

    buttonOpenModal.forEach((element) => element.addEventListener('click', () => {
        displayModal(modal);
    }));

    buttonCloseModal.forEach((element) => element.addEventListener('click', () => {
        closeModal(modal);
    }));

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const fieldsForm = contactForm.elements;
        const valuesForm = { 'firstname': fieldsForm['firstname'].value, 'name': fieldsForm['name'].value, 'email': fieldsForm['email'].value, 'message': fieldsForm['message'].value }
        console.log(valuesForm);
    })
}
