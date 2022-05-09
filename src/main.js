// Import CSS
import "./styles/main.css";

import { toggleLoginRegisterForm, toggleModal, toggleResetPasswordForm } from "./components/actions/ui/modal";
import { startLoginWithEmail, startLoginWithGoogle, startRegisterWithEmail, startSignout, validateFields, resetPassword } from "./components/actions/auth/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./components/firebase/config";
import { setupUI, setupUserUI } from "./components/actions/ui/navbar";
import { startCarousel } from "./components/actions/ui/carousel";

// Get user
onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (user) {
    setupUserUI(user);
  } else {
    setupUI();
  }
});

// Carousel
const carouselContainer = document.querySelector(".glide");
if (carouselContainer) {
  startCarousel();
}

// NAVBAR
const toggleButton = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelectorAll(".navbar-links");
function navbarRes() {
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].classList.toggle("active");
  }
}
toggleButton.addEventListener("click", navbarRes);

// Modal
const joinAsUser = document.querySelector(".join-as-user");
const loginButton = document.querySelector("#login-register");
const modalLoginRegister = document.querySelector("#login-register-modal");
const modalClose = document.querySelector("#close-modal");
const toggleLoginRegisterButton = document.querySelectorAll(".toggle-login-register");
const googleLoginButton = document.querySelector(".google-btn");
const navbarImg = document.querySelector("#navbar-img");
const toggleResetPasswordButton = document.querySelector(".toggle-reset-password");

if (joinAsUser) {
  joinAsUser.addEventListener("click", () => toggleModal(modalLoginRegister));
}
loginButton.addEventListener("click", () => toggleModal(modalLoginRegister));
modalClose.addEventListener("click", () => toggleModal(modalLoginRegister));
toggleLoginRegisterButton.forEach(button => button.addEventListener("click", toggleLoginRegisterForm));
toggleResetPasswordButton.addEventListener("click", toggleResetPasswordForm);

const loginForm = document.querySelector("#login-form");
const registerForm = document.querySelector("#register-form");
const resetPassForm = document.querySelector("#reset-password-form");

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

resetPassForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = resetPassForm.emailReset.value;

  resetPassword(email);
});

registerForm.addEventListener("blur", function(event) {
  const name = registerForm.nameRegister.value;
  const email = registerForm.emailRegister.value;
  const password = registerForm.passwordRegister.value;
  const passwordRepeat = registerForm.passwordRepeatRegister.value;
  validateFields(name, email, password, passwordRepeat);
}, true);

googleLoginButton.addEventListener("click", () => startLoginWithGoogle());

navbarImg.addEventListener("click", () => startSignout());
