const FORM1 = document.querySelector('#js-form1');
const FORM2 = document.querySelector('#js-form2');
const SIGN = document.querySelector('#js-link1');
const JOIN = document.querySelector('#js-link2');
const REDLINE = document.querySelector('.redline');
const CREATE = document.querySelector('.js-create');
const PASS = document.querySelector('.js-pass');
const PASSCK = document.querySelector('.js-passck');
const BUTTON = document.querySelector('.js-button');

BUTTON.addEventListener('click', event => {
    if (PASS.value !== PASSCK.value) {
        alert('Passwords not similar!')
        return false;
    } else return true;
});
SIGN.addEventListener('click', event => {
    event.preventDefault();
    SIGN.classList.add('sign__link-active');
    JOIN.classList.remove('sign__link-active');
    FORM1.classList.add('form-active');
    FORM2.classList.remove('form-active');
    REDLINE.classList.remove('redline__left');
});

CREATE.addEventListener('click', event => {
    event.preventDefault();
    JOIN.classList.add('sign__link-active');
    SIGN.classList.remove('sign__link-active');
    FORM2.classList.add('form-active');
    FORM1.classList.remove('form-active');
    REDLINE.classList.add('redline__left');
});

JOIN.addEventListener('click', event => {
    event.preventDefault();
    JOIN.classList.add('sign__link-active');
    SIGN.classList.remove('sign__link-active');
    FORM2.classList.add('form-active');
    FORM1.classList.remove('form-active');
    REDLINE.classList.add('redline__left');
});