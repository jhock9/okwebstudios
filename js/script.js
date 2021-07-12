// const navbar = document.querySelector(".navbar");
// const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");
const navbarLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", () => {
  mainFunction ();
});

const mainFunction = () => {
//   if (window.pageYOffset >= navbar.offsetTop){
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   };
    
  sections.forEach(function (section, i) {
    if (window.pageYOffset >= section.offsetTop - 10) {
      // for (let navbarLink of navbarLinks) {
      //   navbarLink.classList.remove ('change');
      // }
      navbarLinks.forEach(function (navbarLink) {
        navbarLink.classList.remove ('change');
      });
      navbarLinks[i].classList.add('change');
    }
  });
};

mainFunction ();

// window.addEventListener('resize' ()=> {
//   window.location.reload();
// });