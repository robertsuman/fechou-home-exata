const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('mainNav');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));}
