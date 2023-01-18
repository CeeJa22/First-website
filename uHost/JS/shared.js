'use Strict';

const selectPlanButton = document.querySelectorAll('.plan .button');
const modal = document.querySelector('.modal');
const backdrop = document.querySelector('.backdrop');
const modalButtonNo = document.querySelector('.modal__actions button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');


function closeModal() {
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }  
    backdrop.classList.remove('open');
}


if (modalButtonNo) {
    modalButtonNo.addEventListener('click', closeModal);
}

if (backdrop) {
    backdrop.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        closeModal();
    });
}

for (let i = 0; i <= selectPlanButton.length -1; i++) {
    selectPlanButton[i].addEventListener('click', function () {
        modal.classList.add('open');
        backdrop.classList.add('open');

    });
}

if (toggleButton) {
    toggleButton.addEventListener('click', function() {
        mobileNav.classList.add('open');
        if (backdrop) {
            backdrop.classList.add('open');
        }
    })
}

