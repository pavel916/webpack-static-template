let modalCall = document.querySelector('.modalka');
let btn = document.querySelector('.myCall');
let span = document.querySelector('.modal-span');
const header = document.body.querySelector('.header');

btn.onclick = function() {
  modalCall.style.display = "block";
  main.classList.add('opasity');
  header.classList.add('opasity');
}
span.onclick = function() {
  modalCall.style.display = "none";
  main.classList.remove('opasity');
  header.classList.remove('opasity');
}

let mod = document.querySelector('.modalka-2');
let bt = document.querySelector('.myChat');
let sp = document.querySelector('.modal-span2');
bt.onclick = function() {
  mod.style.display = "block";
  main.classList.add('opasity');
  header.classList.add('opasity');
}
sp.onclick = function() {
  mod.style.display = "none";
  main.classList.remove('opasity');
  header.classList.remove('opasity');
}
window.onclick = function(e) {
  if (e.target == mod || e.target == modalCall) {
    mod.style.display = "none";
    modalCall.style.display = "none";
    main.classList.remove('opasity');
    header.classList.remove('opasity');
  }
}

let main = document.querySelector('.main');
let modalka = document.querySelector('.modalka');
let headerModalCall = document.querySelector('.header__modalCall');
let modalSpan = document.querySelector('.modal-span');
headerModalCall.onclick = function() {
  modalka.style.display = "block";
  main.classList.add('opasity');
  header.classList.add('opasity');
}
modalSpan.onclick = function() {
  modalka.style.display = "none";
  main.classList.remove('opasity');
  header.classList.remove('opasity');
}

let modalka2 = document.querySelector('.modalka-2');
let headerModalMessage = document.querySelector('.header__modalMessage');
let modalSpan2 = document.querySelector('.modal-span2');
headerModalMessage.onclick = function() {
  modalka2.style.display = "block";
  main.classList.add('opasity');
  header.classList.add('opasity');
}
modalSpan2.onclick = function() {
  modalka2.style.display = "none";
  main.classList.remove('opasity');
  header.classList.remove('opasity');
}