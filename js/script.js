const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelector(".navbar-link");
const form = document.querySelector(".contact-form");

window.addEventListener("scroll", () => {
  scrollHandler();
});

const scrollHandler = () => {
  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      navbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove('change');
      });
      navbarLinks[i].classList.add('change');
    }
  });
};

form.addEventListener('submit', (event) => {
  var answer = document.querySelector('input[name="entry.667527348"]').value.toLowerCase();
  if (answer !== 'white') {
    alert('Try again robot!');
    event.preventDefault();
  }
});