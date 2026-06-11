const roles = [
"Aeronautical Engineer",
"Motorsport Engineer",
"Hydrogen Mobility Engineer",
"Composite Structures Engineer"
];

let i=0;
let j=0;
let currentRole="";
let isDeleting=false;

function type(){

currentRole=roles[i];

if(isDeleting){
j--;
}else{
j++;
}

document.getElementById("typing-text").textContent=currentRole.substring(0,j);

if(!isDeleting && j===currentRole.length){
isDeleting=true;
setTimeout(type,1000);
return;
}

if(isDeleting && j===0){
isDeleting=false;
i=(i+1)%roles.length;
}
/* FADE IN PROJECT IMAGES */

const projectImages = document.querySelectorAll(".project-img");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

}, {threshold:0.3});

projectImages.forEach(img => observer.observe(img));

const personalImages = document.querySelectorAll(".personal-img");

personalImages.forEach(img => observer.observe(img));

setTimeout(type,isDeleting?50:100);
}


type();
