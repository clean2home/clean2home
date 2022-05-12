import { doc, setDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Swal from "sweetalert2";
import { auth, storage, db } from "../../firebase/config";

function deleteAccents(string) {
  const accents = { á: "a", é: "e", í: "i", ó: "o", ú: "u", Á: "A", É: "E", Í: "I", Ó: "O", Ú: "U" };
  return string.toLowerCase().split("").map(word => accents[word] || word).join("").toString();
}

export const startCreateCleaner = async(name, cp, city, phone, description, price, image) => {
  if (validateCleaner(name, cp, city, phone, description, price, image)) {
    const userEmail = auth.currentUser.email;
    const imgUrl = await uploadImage(image);
    const newCleaner = {
      name,
      cp,
      city,
      citySearch: deleteAccents(city),
      phone,
      description,
      price,
      image: imgUrl,
      rating: 0,
      verified: false,
      email: userEmail,
      works: 0
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
    }).then(() => {
      window.location.replace(window.location.origin + "/cleaners.html");
    });
  });
};

const validateCleaner = (name, cp, city, phone, description, price, image) => {
  if (name && (cp && cp.length === 5) && city && (phone && phone.length === 9) && description && price && image) {
    return true;
  }
};
