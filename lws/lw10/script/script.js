let btn = document.getElementsByClassName('btn');
let btnoff = document.getElementsByClassName('btnoff');


let form = document.querySelector('.main__questionnaire');
let bgform = document.querySelector('.popup');

[].forEach.call(btn, function (el) {
        el.addEventListener('click', () => {
        let id = requestAnimationFrame(popupOn);
        cancelAnimationFrame(id);
        return requestAnimationFrame(popupOn);
    })
});

[].forEach.call(btnoff, function (el) {
        el.addEventListener('click', () => {
        let id = requestAnimationFrame(popupOff);
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
}

function popupOff() {
    form.classList.add('popup_form-off');
    bgform.classList.add('popup_bg-off');
    form.classList.remove('popup_form-on');
    bgform.classList.remove('popup_bg-on');
}