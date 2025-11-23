// Scroll Reveal Animation
const reveals = document.querySelectorAll('.reveal');


function revealOnScroll() {
const triggerPoint = window.innerHeight * 0.85;


reveals.forEach(el => {
if (el.getBoundingClientRect().top < triggerPoint) {
el.classList.add('visible');
}
});
}


window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
