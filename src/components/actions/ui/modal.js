const registerForm = document.querySelector("#register-form");
const loginForm = document.querySelector("#login-form");

export const toggleModal = (modal) => {
  registerForm.reset();
  loginForm.reset();
  modal.classList.toggle("active");
};

export const toggleLoginRegisterForm = () => {
  const registerBlock = document.querySelector(".register-block");
  const loginBlock = document.querySelector(".login-block");
  loginBlock.classList.toggle("active");
  registerBlock.classList.toggle("active");
};
