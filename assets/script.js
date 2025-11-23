// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    for (const el of reveals) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // trigger on load
