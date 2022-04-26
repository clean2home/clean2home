import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import { isEmail, isStrongPassword } from "validator";
import isAlpha from "validator/lib/isAlpha";
import { toggleModal } from "../ui/modal";

const modalLoginRegister = document.querySelector("#login-register-modal");

export const startRegisterWithEmail = (name, email, password, rpPassword) => {
  // Validación campos
  if (validateFields(name, email, password, rpPassword)) {
    registerWithEmail(name, email, password);
  }
};

const registerWithEmail = (name, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    // https://api.multiavatar.com/Binx%20Bond.png
    .then(async({ user }) => {
    // Signed in
      const profileImage = `https://api.multiavatar.com/${user.uid}.png`;
      await updateProfile(user, { displayName: name, photoURL: profileImage });
      console.log(user);
    // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    // ..
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
      console.log(user);
      toggleModal(modalLoginRegister);
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error);
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
  } else if (email && !isEmail(email)) {
    emailField.classList.add("error-email");
    emailErrorMessage.classList.add("error-email-msg");
  } else if (password && !isStrongPassword(password, { minLength: 6, minSymbols: 0 })) {
    passField.classList.add("error-pass");
    passErrorMessage.classList.add("error-pass-msg");
  } else if (passwordRepeat && password !== passwordRepeat) {
    passRepField.classList.add("error-passrep");
    passRepErrorMessage.classList.add("error-passrep-msg");
  } else if (name && email && password && passwordRepeat) {
    return true;
  }
};
