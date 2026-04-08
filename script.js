function toggleMenu(){

const nav = document.getElementById("nav")

nav.classList.toggle("active")

}


/* CLOSE MENU WHEN CLICKING A LINK */

document.querySelectorAll("#nav a").forEach(link => {

link.addEventListener("click", () => {

document.getElementById("nav").classList.remove("active")

})

})


/* CLOSE MENU WHEN CLICKING OUTSIDE */

document.addEventListener("click", function(event){

const nav = document.getElementById("nav")
const menuBtn = document.querySelector(".menuBtn")

if(!nav.contains(event.target) && !menuBtn.contains(event.target)){
nav.classList.remove("active")
}

})

function showProjects(type, btn){

document.querySelectorAll(".projects-container")
.forEach(section=>{
section.classList.remove("active")
})

document.querySelector("." + type)
.classList.add("active")

document.querySelectorAll(".tab-btn")
.forEach(b=>{
b.classList.remove("active")
})

btn.classList.add("active")

}


function toggleSafety(){

const section = document.getElementById("safety-policy")

if(section.style.display === "block"){
section.style.display = "none"
}else{
section.style.display = "block"
section.scrollIntoView({behavior:"smooth"})
}

}






document.addEventListener("DOMContentLoaded", function(){

const elements = document.querySelectorAll(
".card, .service-card, .project-card, .safety-card, .about-box"
);

elements.forEach((el,i)=>{

el.style.opacity = "0";
el.style.transform = "translateY(50px)";
el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
el.style.transitionDelay = (i * 0.1) + "s";

});


function reveal(){

const windowHeight = window.innerHeight;

elements.forEach(el => {

const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 120){

el.style.opacity = "1";
el.style.transform = "translateY(0)";

}

});

}

window.addEventListener("scroll", reveal);
reveal();

});






document.addEventListener("DOMContentLoaded", function(){

const stats = document.querySelector(".about-stats");

/* initial hidden style */

stats.style.opacity = "0";
stats.style.transform = "translateY(40px)";
stats.style.transition = "all 0.8s ease";


function revealStats(){

const windowHeight = window.innerHeight;
const elementTop = stats.getBoundingClientRect().top;

if(elementTop < windowHeight - 120){

stats.style.opacity = "1";
stats.style.transform = "translateY(0)";

}

}

window.addEventListener("scroll", revealStats);
revealStats();

});








