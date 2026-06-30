// ===============================
// FRUITVA PREMIUM V2
// script.js
// ===============================

// Sticky Navbar Shadow
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";
  } else {
    navbar.style.boxShadow = "none";
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {

      target.scrollIntoView({

        behavior: "smooth"

      });

    }

  });

});

// Active Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {

      link.classList.add("active");

    }

  });

});

// Fade In Animation
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {

  threshold: 0.2

});

document.querySelectorAll(
".card,.product,.nutrition-card,.review-card,.faq-item,.contact"
).forEach(el => {

  el.classList.add("hidden");

  observer.observe(el);

});

// Button Ripple Effect
document.querySelectorAll("button,a").forEach(btn => {

  btn.addEventListener("click", function(e){

    let circle = document.createElement("span");

    let x = e.clientX - this.offsetLeft;

    let y = e.clientY - this.offsetTop;

    circle.style.left = x + "px";

    circle.style.top = y + "px";

    circle.classList.add("ripple");

    this.appendChild(circle);

    setTimeout(() => {

      circle.remove();

    },600);

  }):

});

// Loading Animation
window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


console.log("🍋 Fruitva Premium Website Loaded Successfully");
/* JS Animations */

.hidden{
opacity:0;
transform:translateY(50px);
transition:all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

.nav-links a.active{
color:#F4B400;
}

button,
a{
position:relative;
overflow:hidden;
}

.ripple{
position:absolute;
width:20px;
height:20px;
background:rgba(255,255,255,.5);
border-radius:50%;
transform:scale(0);
animation:ripple .6s linear;
pointer-events:none;
}

@keyframes ripple{

to{

transform:scale(20);

opacity:0;

}

}

body{

opacity:0;

transition:opacity .7s;

}

body.loaded{

opacity:1;

  }
