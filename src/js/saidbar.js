const mainConteiner = document.body.querySelector('.main__container');
const header = document.body.querySelector('.header');
const open = document.body.querySelector('.header__openSaidbar');
const mainOpen = document.body.querySelector('.main');
const saidbarConteiner = document.body.querySelector('.saidbar__conteiner');
const closest = document.querySelector('.btn-saidbar');
open.onclick = function() {
  saidbarConteiner.classList.add('saidbar__open');
  mainOpen.classList.add('open');
  header.classList.add('opasity');
  mainConteiner.classList.add('opasity');
}
closest.addEventListener("click", function() {
  saidbarConteiner.classList.remove('saidbar__open');
  mainOpen.classList.remove('open');
  header.classList.remove('opasity');
  mainConteiner.classList.remove('opasity');
})

mainOpen.onclick = function() {
  mainOpen.classList.remove('open');
  header.classList.remove('opasity');
  mainConteiner.classList.remove('opasity');
  saidbarConteiner.classList.remove('saidbar__open');
}
