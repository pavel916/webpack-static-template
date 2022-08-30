document.addEventListener("DOMContentLoaded", hiddenCloseclick3());
document.querySelector('.btn-repair').addEventListener("click", hiddenCloseclick3);
  function hiddenCloseclick3() {
  let x = document.querySelector('.rem-mon');
    if (x.style.display == "none"){
    x.style.display = "flex";
    } else {
   x.style.display = "none"}
  };

const btnRep = document.body.querySelector('.btn-repair');
btnRep.addEventListener('click', function() {
  
  if(btnRep.innerText === 'Показать все') {
    btnRep.innerText = 'Скрыть';
  }
  else {
    btnRep.innerText = 'Показать все';
  }
  btnRep.classList.toggle('btn-repair--close')

});