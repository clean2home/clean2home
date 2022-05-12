const registerForm = document.querySelector("#register-form");
const loginForm = document.querySelector("#login-form");
const resetPasswordForm = document.querySelector("#reset-password-form");

export const toggleModal = (modal) => {
  registerForm.reset();
  loginForm.reset();
  resetPasswordForm.reset();
  modal.classList.toggle("active");
};

export const closeResetPasswordModal = () => {
  resetPasswordForm.reset();
};

export const toggleLoginRegisterForm = () => {
  const resetPasswordBlock = document.querySelector(".reset-password-block");
  const registerBlock = document.querySelector(".register-block");
  const loginBlock = document.querySelector(".login-block");

  // registerBlock.classList.toggle("active");
  if (resetPasswordBlock.classList.contains("active")) {
    loginBlock.classList.toggle("active");
    registerBlock.classList.remove("active");
    resetPasswordBlock.classList.remove("active");
  } else {
    loginBlock.classList.toggle("active");
    registerBlock.classList.toggle("active");
  }
};

export const toggleResetPasswordForm = () => {
  const registerBlock = document.querySelector(".register-block");
  const loginBlock = document.querySelector(".login-block");
  const resetPasswordBlock = document.querySelector(".reset-password-block");
  loginBlock.classList.remove("active");
  registerBlock.classList.remove("active");
  resetPasswordBlock.classList.add("active");
};
