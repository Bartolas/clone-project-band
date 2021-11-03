const btnToggler=document.querySelector('#btnToggler');
const nav=document.querySelector('nav');
console.log(btnToggler);

function showNav(){
    nav.classList.toggle('showNav');
}

btnToggler.addEventListener('click',showNav);