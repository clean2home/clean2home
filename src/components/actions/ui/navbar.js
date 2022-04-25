const navbarUser = document.querySelector(".navbar-user");
const navbarName = document.querySelector("#navbar-name");
const navbarImage = document.querySelector("#navbar-img");
const buttonLoginRegister = document.querySelector("#login-register");

export const setupUserUI = ({ displayName, photoURL }) => {
  navbarName.innerHTML = displayName;
  navbarImage.src = photoURL;
  buttonLoginRegister.style.display = "none";
  navbarUser.style.display = "flex";
};

export const setupUI = () => {
  navbarUser.style.display = "none";
  buttonLoginRegister.style.display = "block";
};
