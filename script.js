'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

btnOpenModal.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

btnCloseModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

window.onkeydown = function (evt) {
  if ( (evt.keyCode == '27') && (!modal.classList.contains('hidden'))) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};

overlay.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

/* 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', function () {
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}

function hide() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', hide);

document.querySelector('.overlay').addEventListener('click', hide);

window.onkeydown = function (evt) {
  if (evt.keyCode == '27') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
};


document.getElementsByClassName('show-modal').onclick = function () {
  document.querySelector('.hidden').style.display = 'block';
};

document.getElementsByClassName('.close-modal').onclick = function () {
  document.querySelector('.hidden').style.display = 'hidden';
};
 */
