import { doc, getDocs, collection, query, where } from "firebase/firestore";
import { db } from "./firebase/config";

const cleanerProfile = document.querySelector(".cleaner-profile");

const passedURL = window.location.search; // '?id=4'
const idPosition = passedURL.indexOf("=") + 1; // Vas al '=' y la siguiente posicion
const id = parseInt(passedURL.slice(idPosition, (idPosition + 2))); // Cortas desde el siguiente a 2 numeros, si no hay 2 borra el espacio automaticamente
const queryString = decodeURI(window.location.search);

const urlParams = new URLSearchParams(queryString).get("id");

const cleanerName = document.querySelector(".cleaner-name");
const cleanerDescription = document.querySelector(".cleaner-info-p");
const cleanerWorks = document.querySelector(".works");
const cleanerPrice = document.querySelector(".price");
const cleanerRating = document.querySelector(".rating");
const cleanerCP = document.querySelector(".cp-profile");
const cleanerMap = document.querySelector(".cleaner-map");
const cleanerImg = document.querySelector(".cleaner-image img");
const cleanerCity = document.querySelector(".cleaner-city");
const cleanerPhone = document.querySelector(".cleaner-phone");
const cleanerEmail = document.querySelector(".cleaner-email");

console.log(cleanerRating);

const getCleaners = async () => {
    const cleaners = [];
    const collRef = collection(db, "cleaners");
    const querySnapshot = await getDocs(collRef);

    console.log(querySnapshot);
    if (!querySnapshot.docs) {
        cleanerProfile.innerHTML = "<h2>No existe este cleaner</h2>";
    } else {
        querySnapshot.forEach((doc) => {
            if (doc.id === urlParams) {
                console.log(doc.data());
                cleanerName.textContent = doc.data().name;
                cleanerCP.innerHTML = `<small>Código Postal:</small> ${doc.data().cp}`;
                cleanerDescription.textContent = doc.data().description;
                cleanerWorks.textContent = `${doc.data().works} trabajos`;
                cleanerPrice.innerHTML = `<strong> ${doc.data().price}€</strong><small>/hora</small>`;
                cleanerMap.src = `https://www.google.com/maps/embed/v1/place?key=AIzaSyC7OsQRiEZ0xQPyy2cY9UxCdP-u5KCR5Ew&q=${doc.data().citySearch}`;
                cleanerCity.textContent = doc.data().city;
                cleanerImg.src = doc.data().image;
                cleanerRating.innerHTML = `<i class="fa-solid fa-star"></i> ${doc.data().rating}`;
                cleanerPhone.href = `https://api.whatsapp.com/send?phone=${doc.data().phone}`;
                cleanerEmail.href = `mailto:${doc.data().email}`;
                cleanerPhone.innerHTML = doc.data().phone;
                cleanerEmail.innerHTML = doc.data().email;
            }
        });
    }

    return cleaners;
};

getCleaners();
