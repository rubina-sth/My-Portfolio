const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const li = document.querySelectorAll('.nav-links li');


burger.addEventListener('click', ()=>{
    navLinks.classList.toggle('open');
    burger.classList.toggle('toggle')
});


li.forEach((list) =>{
    list.addEventListener('click', ()=>{
        navLinks.classList.toggle('open');
        burger.classList.toggle('toggle');
    })
});