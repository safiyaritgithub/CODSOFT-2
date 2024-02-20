let nav=document.querySelector('nav');

window.addEventListener('scroll',()=>{
    nav.classList.toggle('naWinScroll',window,scrollY>0)
})

let toggle = document.querySelector(".toggle");

let lists = document.querySelector(".lists");

toggle.onclick = function () {
  lists.classList.toggle("active");
};