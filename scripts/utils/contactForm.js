const modal = document.getElementById('contact_modal');
const buttonOpenModal = document.querySelectorAll('.open-modal');
const buttonCloseModal = document.querySelectorAll('.close-modal');

buttonOpenModal.forEach(element => {
    element.addEventListener('click', displayModal);
});

buttonCloseModal.forEach(element => {
    element.addEventListener('click', closeModal);
});

function displayModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}
