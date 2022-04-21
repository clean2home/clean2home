export const toggleModal = (modal) => {
  modal.classList.toggle("active");
};

export const toggleLoginRegisterForm = () => {
  const registerBlock = document.querySelector(".register-block");
  const loginBlock = document.querySelector(".login-block");
  loginBlock.classList.toggle("active");
  registerBlock.classList.toggle("active");
};
