import Swal from "sweetalert2/dist/sweetalert2.all.js";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import { isEmail, isStrongPassword } from "validator";
import isAlpha from "validator/lib/isAlpha";
import { toggleModal } from "../ui/modal";
import { setupUserUI } from "../ui/navbar";

const modalLoginRegister = document.querySelector("#login-register-modal");
const provider = new GoogleAuthProvider();

export const startRegisterWithEmail = (name, email, password, rpPassword) => {
  // Validación campos
  if (validateFields(name, email, password, rpPassword)) {
    registerWithEmail(name, email, password);
  } else {
    Swal.fire({
      title: "Error",
      text: "Hay algún campo incorrecto",
      icon: "error",
      confirmButtonColor: "#00cba9"
    });
  }
};

const registerWithEmail = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(async({ user }) => {
      const profileImage = `https://api.multiavatar.com/${user.uid}.png`;
      await updateProfile(user, { displayName: name, photoURL: profileImage });
      setupUserUI(user);
      toggleModal(modalLoginRegister);
      Swal.fire({
        title: "Registro correcto",
        text: "Ahora ya puedes empezar a buscar Cleaners en tu zona",
        icon: "success",
      });
    })
    .catch((error) => {
      console.warn(error);
      Swal.fire({
        title: "Error",
        text: "Error en el registro",
        icon: "error",
        confirmButtonColor: "#00cba9"
      });
    });
};

export const startLoginWithEmail = (email, password) => {
  // Validación campos
  loginWithEmail(email, password);
  // Llamar a funcion firebase
};

const loginWithEmail = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then(async({ user }) => {
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión correcto",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false
      }).then((result) => {
        setupUserUI(user);
        toggleModal(modalLoginRegister);
      });
    })
    .catch((error) => {
      console.warn(error);
      Swal.fire({
        title: "Oops...",
        text: "Las credenciales no son correctas",
        icon: "error",
        confirmButtonColor: "#00cba9"
      });
    });
};

export const startLoginWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async({ user }) => {
      const name = user.displayName.split(" ")[0];
      updateProfile(user, { displayName: name });
      if (!user.photoURL) {
        const profileImage = `https://api.multiavatar.com/${user.uid}.png`;
        await updateProfile(user, { photoURL: profileImage });
      }
      setupUserUI(user);
      Swal.fire({
        icon: "success",
        title: "Inicio de sesión correcto",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        allowOutsideClick: false
      }).then((result) => {
        toggleModal(modalLoginRegister);
      });
    }).catch((error) => {
      // Handle Errors here.
      console.warn(error);
      Swal.fire({
        title: "Error",
        text: "Error en el registro",
        icon: "error",
        confirmButtonColor: "#00cba9"
      });
    });
};

export const validateFields = (name, email, password, passwordRepeat) => {
  const nameField = document.querySelector("#nameRegister");
  const nameErrorMessage = document.querySelector(".error-name-msg-hidden");
  const emailField = document.querySelector("#emailRegister");
  const emailErrorMessage = document.querySelector(".error-email-msg-hidden");
  const passField = document.querySelector("#passwordRegister");
  const passErrorMessage = document.querySelector(".error-pass-msg-hidden");
  const passRepField = document.querySelector("#passwordRepeatRegister");
  const passRepErrorMessage = document.querySelector(".error-passrep-msg-hidden");
  if (name && !isAlpha(name)) {
    nameField.classList.add("error-name");
    nameErrorMessage.classList.add("error-name-msg");
  }
  if (email && !isEmail(email)) {
    emailField.classList.add("error-email");
    emailErrorMessage.classList.add("error-email-msg");
  }
  if (password && !isStrongPassword(password, { minLength: 6, minSymbols: 0 })) {
    passField.classList.add("error-pass");
    passErrorMessage.classList.add("error-pass-msg");
  }
  if (passwordRepeat && password !== passwordRepeat) {
    passRepField.classList.add("error-passrep");
    passRepErrorMessage.classList.add("error-passrep-msg");
  }

  if (name && isAlpha(name)) {
    nameField.classList.remove("error-name");
    nameErrorMessage.classList.remove("error-name-msg");
  }
  if (email && isEmail(email)) {
    emailField.classList.remove("error-email");
    emailErrorMessage.classList.remove("error-email-msg");
  }
  if (password && isStrongPassword(password, { minLength: 6, minSymbols: 0 })) {
    passField.classList.remove("error-pass");
    passErrorMessage.classList.remove("error-pass-msg");
  }
  if (passwordRepeat && password === passwordRepeat) {
    passRepField.classList.remove("error-passrep");
    passRepErrorMessage.classList.remove("error-passrep-msg");
  }

  if (isAlpha(name) && isEmail(email) && isStrongPassword(password, { minLength: 6, minSymbols: 0 }) && password === passwordRepeat) {
    return true;
  } else {
    return false;
  }
};

export const startSignout = () => {
  signOut(auth).then(() => {
    Swal.fire({
      icon: "success",
      title: "¡Hasta pronto!",
      timer: 1000,
      timerProgressBar: true,
      showConfirmButton: false,
      allowOutsideClick: false
    });
  }).catch((error) => {
    console.log(error);
  });
};
