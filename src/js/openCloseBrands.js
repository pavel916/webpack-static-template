// document.addEventListener("DOMContentLoaded", hiddenCloseclick());
// document.querySelector('.btn-none').addEventListener("click", hiddenCloseclick);
//   function hiddenCloseclick() {
//   let x = document.querySelector('.item-9');
//     if (x.style.display == "none"){
//     x.style.display = "flex";
//     } else {
//    x.style.display = "none"}
//   };

  document.addEventListener("DOMContentLoaded", hiddenCloseclick2());
  document.querySelector('.btn-none').addEventListener("click", hiddenCloseclick2);
    function hiddenCloseclick2() {
    let x = document.querySelector('.block__close');
      if (x.style.display == "none"){
      x.style.display = "flex";
      } else {
     x.style.display = "none"}
    };



const b = document.body.querySelector('.btn-none');

b.addEventListener('click', function() {
  
  if(b.innerText === 'Показать все') {
    b.innerText = 'Скрыть';
  }
  else {
    b.innerText = 'Показать все';
  }
});


const button = document.body.querySelector('.btn-none');
button.addEventListener("click", function(){

  button.classList.toggle('btn-close')
})