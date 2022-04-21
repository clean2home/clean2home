import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";

export const startRegisterWithEmail = (name, email, password, rpPassword) => {
  // Validación campos
  console.log(name, email);
  // Llamar a funcion firebase
  registerWithEmail(name, email, password);
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
