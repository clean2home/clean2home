const navbarUser = document.querySelector(".navbar-user");
const navbarName = document.querySelector("#navbar-name");
const navbarImage = document.querySelector("#navbar-img");
const buttonLoginRegister = document.querySelector("#login-register");
const navbarLogout = document.querySelector(".navbar-logout");

export const setupUserUI = ({ displayName, photoURL }) => {
  navbarName.innerHTML = displayName;
  navbarImage.src = photoURL;
  buttonLoginRegister.style.display = "none";
  navbarUser.style.display = "flex";
  navbarLogout.style.display = "block";
};

export const setupUI = () => {
  navbarUser.style.display = "none";
  buttonLoginRegister.style.display = "block";
  navbarLogout.style.display = "none";
};
