const navSlider = () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burgerMenu.addEventListener("click", () => {
    // diplay flex
    nav.style.display = "flex";
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((links, index) => {
      if (links.style.animation) {
        links.style.animation = "";
      } else {
        links.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    // Burger menu animation
    burgerMenu.classList.toggle("toggle");
  });
};

navSlider();
