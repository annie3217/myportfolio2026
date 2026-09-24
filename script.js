// Reveal Animation

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(section=>{

const top=section.getBoundingClientRect().top;

if(top<window.innerHeight-100){

section.classList.add("active");

}

});

});

// Mobile Menu

const menu=document.querySelector(".menu-btn");
const nav=document.querySelector("nav");

menu.addEventListener("click",()=>{

nav.classList.toggle("show");

});

const style=document.createElement("style");

style.innerHTML=`
@media(max-width:900px){
nav.show{
display:flex;
position:absolute;
top:80px;
left:0;
right:0;
background:#111;
flex-direction:column;
padding:30px;
gap:20px;
}
}
`;

document.head.appendChild(style);
