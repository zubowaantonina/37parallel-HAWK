//изьенение цвета navbar при прокрутке
const navbar = document.querySelector(".navbar");
const lightModeOn = (event) => {
  navbar.classList.add("navbar-light");
};
const lightModeOff = (event) => {
  navbar.classList.remove("navbar-light");
};
window.addEventListener("scroll", () => {
    // this.scrollY > 1 ? changeNavHeight("3.5rem") : changeNavHeight("4rem");
//   this.scrollY > 1 ? changeNavHeight("3.5rem") : changeNavHeight("4rem");
//   if (isFront) {
  this.scrollY > 1 ? lightModeOn() : lightModeOff();
//   }
});
// плавный скроллинг
const links = document.querySelectorAll(".header-menu-link");
for (let link of links) {
   link.addEventListener('click', (e)=> {
        e.preventDefault();
        const id = link.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "center",
        });
    });
};