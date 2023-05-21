/* --------------- Grab elements from DOM --------------- */
const header = document.querySelector("header")

/* --------------- Sticky Navbar --------------- */

function stickyNavbar() {
  header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavbar)
/* --------------- Reveal Animation --------------- */
let sr = ScrollReveal({
  duration: 2500,
  distance: "60px",
});

sr.reveal(".showcase-info", { delay: 400 });
sr.reveal(".showcase-image", { origin: "top", delay: 500 });

/* --------------- Skills Progress Bar Animation --------------- */

/* --------------- Services Counter Animation --------------- */

/* --------------- Portfolio Filter Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Modal Pop Up Animation Animation --------------- */

/* --------------- Change Active Link On Scroll --------------- */

/* --------------- Change Page Theme --------------- */

/* --------------- Open & Close Navbar Menu --------------- */
