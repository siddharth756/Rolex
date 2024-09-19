const navbar = document.getElementById("navbar");

window.onscroll = function () {
  if (window.scrollY > 650) {
    navbar.classList.add("active-navbar");
  } else {
    navbar.classList.remove("active-navbar");
  }
};
