document.addEventListener("DOMContentLoaded", hiddenCloseclick33());
document.querySelector('.btn-none3').addEventListener("click", hiddenCloseclick33);
  function hiddenCloseclick33() {
  let x = document.querySelector('.main__content-text--close');
    if (x.style.display == "none"){
    x.style.display = "block";
    } else {
   x.style.display = "none"}
  };



  const z = document.body.querySelector('.btn-none3');

  z.addEventListener('click', function() {
    
    if(z.innerText === 'Читать далее') {
      z.innerText = 'Скрыть текст';
    }
    else {
      z.innerText = 'Читать далее';
    }
  });

  const button3 = document.body.querySelector('.btn-none3');
  button3.addEventListener("click", function(){

  button3.classList.toggle('btn-none3--close')
})