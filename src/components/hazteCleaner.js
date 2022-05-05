import { onAuthStateChanged } from "firebase/auth";
import { startCreateCleaner } from "./actions/cleaners/cleaners";
import { auth } from "./firebase/config";

const userLogged = document.querySelector(".user-logged");
const userUnlogged = document.querySelector(".user-unlogged");

onAuthStateChanged(auth, (user) => {
  if (user) {
    userLogged.style.display = "block";
    userUnlogged.style.display = "none";
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
  const description = cleanerForm.description.value;
  const price = cleanerForm.price.value;
  const image = cleanerForm.image.files[0];

  startCreateCleaner(name, cp, city, description, price, image);
};

imageInput.addEventListener("change", showPreview);
cleanerForm.addEventListener("submit", handleSubmitForm);
