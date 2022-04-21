import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
// Import CSS
import "./styles/main.css";
import { toggleLoginRegisterForm, toggleModal } from "./components/actions/ui/modal";

// Carousel
new Glide(".glide", {
  type: "carousel",
  focusAt: "center",
  perView: 4,
  gap: 70,
  autoplay: 7000,
  keyboard: true,
  breakpoints: {
    1400: {
      perView: 3
    },
    1024: {
      perView: 2,
      gap: 70
    },
    600: {
      perView: 1
    }
  }
}).mount();

const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");
function navbarRes() {
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle("active");
  }
}
toggleButton.addEventListener("click", navbarRes);

// Modal
const loginButton = document.querySelector("#login-register");
const modalLoginRegister = document.querySelector("#login-register-modal");
const modalClose = document.querySelector("#close-modal");
const toggleLoginRegisterButton = document.querySelectorAll(".toggle-login-register");

loginButton.addEventListener("click", () => toggleModal(modalLoginRegister));
modalClose.addEventListener("click", () => toggleModal(modalLoginRegister));
toggleLoginRegisterButton.forEach(button => button.addEventListener("click", toggleLoginRegisterForm));
