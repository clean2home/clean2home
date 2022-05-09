import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { startCreateCleaner } from "./actions/cleaners/cleaners";
import { auth, db } from "./firebase/config";

const userLogged = document.querySelector(".user-logged");
const userUnlogged = document.querySelector(".user-unlogged");
const userCleaner = document.querySelector(".user-cleaner");

onAuthStateChanged(auth, async(user) => {
  if (user) {
    const userRef = doc(db, `users/${user.uid}`);
    const userDb = await getDoc(userRef);
    const { cleaner } = userDb.data();

    userLogged.style.display = "block";
    userUnlogged.style.display = "none";

    if (cleaner) {
      userLogged.style.display = "none";
      userCleaner.style.display = "block";
    }
  } else {
    userLogged.style.display = "none";
    userUnlogged.style.display = "block";
  }
});

const imageInput = document.querySelector("#image");
const cleanerForm = document.querySelector(".hazte-cleaner-form");

const showPreview = (event) => {
  if (event.target.files.length > 0) {
    const src = URL.createObjectURL(event.target.files[0]);
    const preview = document.getElementById("image-preview");
    preview.src = src;
    preview.style.display = "block";
  }
};

const handleSubmitForm = (e) => {
  e.preventDefault();
  const name = cleanerForm.name.value;
  const cp = cleanerForm.cp.value;
  const city = cleanerForm.city.value;
  const phone = cleanerForm.phone.value;
  const description = cleanerForm.description.value;
  const price = cleanerForm.price.value;
  const image = cleanerForm.image.files[0];

  startCreateCleaner(name, cp, city, phone, description, price, image);
};

imageInput.addEventListener("change", showPreview);
cleanerForm.addEventListener("submit", handleSubmitForm);
