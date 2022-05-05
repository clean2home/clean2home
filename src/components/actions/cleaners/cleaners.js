import { doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
import { auth, storage, db } from "../../firebase/config";

export const startCreateCleaner = async(name, cp, city, description, price, image) => {
  if (validateCleaner(name, cp, city, description, price, image)) {
    const imgUrl = await uploadImage(image);
    const newCleaner = {
      name,
      cp,
      city,
      description,
      price,
      image: imgUrl,
      rating: 0
    };
    createCleaner(newCleaner);
  } else {
    Swal.fire({
      title: "Oops...",
      icon: "error",
      text: "Compurueba si has dejado algun campo en blanco o hay algun dato incorrecto"
    });
  }
};

export const uploadImage = async(image) => {
  const userId = auth.currentUser.uid;
  const storageRef = ref(storage, `cleaners/${userId}`);
  const img = await uploadBytes(storageRef, image);
  const url = await getDownloadURL(img.ref);
  return url;
};

const createCleaner = (cleaner) => {
  const userId = auth.currentUser.uid;
  const cleanerRef = doc(db, "cleaners", userId);
  const userRef = doc(db, "users", userId);
  setDoc(cleanerRef, cleaner).then(() => {
    updateDoc(userRef, { cleaner: true });
    Swal.fire({
      title: "¡Enhorabuena!",
      icon: "success",
      text: "Ya eres cleaner"
    });
  });
};

const validateCleaner = (name, cp, city, description, price, image) => {
  if (name && (cp && cp.length === 5) && city && description && price && image) {
    return true;
  }
};
