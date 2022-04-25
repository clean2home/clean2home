import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import { isEmail, isStrongPassword } from "validator";
import isAlpha from "validator/lib/isAlpha";

const registerForm = document.querySelector("#register-form");
console.log(registerForm);
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
  console.log(email, password);
  // Llamar a funcion firebase
};

export const validateFields = (name, email, password, passwordRepeat) => {
  if (name && !isAlpha(name)) {
    console.log("Checking name validator");
  } else if (email && !isEmail(email)) {
    console.log("Checking email validator");
  } else if (password && !isStrongPassword(password, { minLength: 6, minSymbols: 0 })) {
    console.log("Checking password validator");
  } else if (passwordRepeat && password !== passwordRepeat) {
    console.log("Checking password repeat validator");
  } else if (name && email && password && passwordRepeat) {
    return true;
  }
};
