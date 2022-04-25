// Import CSS
import "./styles/main.css";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "@glidejs/glide/dist/css/glide.theme.min.css";
import { toggleLoginRegisterForm, toggleModal } from "./components/actions/ui/modal";
import { startLoginWithEmail, startRegisterWithEmail, validateFields } from "./components/actions/auth/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase/config";
import { setupUI, setupUserUI } from "./components/actions/ui/navbar";

// Get user
onAuthStateChanged(auth, (user) => {
  if (user) {
    setupUserUI(user);
  } else {
    setupUI();
  }
});

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

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = registerForm.nameRegister.value;
  const email = registerForm.emailRegister.value;
  const password = registerForm.passwordRegister.value;
  const passwordRepeat = registerForm.passwordRepeatRegister.value;

  startRegisterWithEmail(name, email, password, passwordRepeat);
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm.emailLogin.value;
  const password = loginForm.passwordLogin.value;

  startLoginWithEmail(email, password);
});

registerForm.addEventListener("blur", function(event) {
  const name = registerForm.nameRegister.value;
  const email = registerForm.emailRegister.value;
  const password = registerForm.passwordRegister.value;
  const passwordRepeat = registerForm.passwordRepeatRegister.value;
  validateFields(name, email, password, passwordRepeat);
}, true);
