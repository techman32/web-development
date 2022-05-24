const btn = document.getElementsByClassName('btn');
const btnoff = document.getElementsByClassName('btnoff');

const form = document.querySelector('.main__questionnaire');
const contentForm = document.querySelector('.questionnaire-content');
const bgform = document.querySelector('.popup');
const error = document.querySelector('.form__error');

[].forEach.call(btn, function (el) {
        el.addEventListener('click', () => {
        const id = requestAnimationFrame(popupOn);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOn);
    })
});

[].forEach.call(btnoff, function (el) {
        el.addEventListener('click', () => {
        const id = requestAnimationFrame(popupOff);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOff);
    })
});

document.onkeydown = logKey;
function logKey(e) {
    if (e.code == "Escape") {
        popupOff();
    }
}

function popupOn() {
    form.classList.add('popup_form-on');
    bgform.classList.add('popup_bg-on');
    form.classList.remove('popup_form-off');
    bgform.classList.remove('popup_bg-off');
    contentForm.style.display = 'flex';
}

function popupOff() {
    form.classList.add('popup_form-off');
    bgform.classList.add('popup_bg-off');
    form.classList.remove('popup_form-on');
    bgform.classList.remove('popup_bg-on');
    error.classList.add('form__error-off');
    error.classList.remove('form__error-on');    
}

function popupError() {
    contentForm.style.display = 'none';
    error.classList.add('form__error-on');
    error.classList.remove('form__error-off');
}