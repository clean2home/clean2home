let passedURL = window.location.search; // '?id=4'
let idPosition = passedURL.indexOf('=') + 1; // Vas al '=' y la siguiente posicion
let id = parseInt(passedURL.slice(idPosition, (idPosition + 2))) //Cortas desde el siguiente a 2 numeros, si no hay 2 borra el espacio automaticamente
let cleanerProfile = '';


const cleaners = [
    { id: 1, name: "Mery Jane", description: "Hola soy Mery, ¡encantada de conocerte! Llevo más de 10 años dedicándome al servicio doméstico, también puedo cocinar en las horas de trabajo. Tengo buena mano y buen gusto a la hora de ordenar y dedicación por completo.", worksCount: 185, rating: 3, price: "12,00€" },
    { id: 2, name: "Pedro Pascal", description: "Chico muy serio en su trabajo, con más de 8 años de experiencia laboral demostrada. Trato todo tipo de superficies con delicadezza y cuido hasta el más mínimo detalle. Tengo disponibilidad horaria total.", worksCount: 519, rating: 5, price: "16,00€" },
    { id: 3, name: "Maria Fernandez", description: "Me llamo María y llevo toda la vida trabajando como limpiadora. Estaré encantada de cuidar tu hogar como se merece.", worksCount: 1589, rating: 4, price: "20,00€" },
    { id: 4, name: "Natalia Amorós", description: "Limpiadora con más de 5 años de experiencia, disponibilidad total de horario, festivos incluídos. Soy rápida a la par que eficaz en mi trabajo. ¡No dudes en llamarme!", worksCount: 105, rating: 5, price: "15,00€" }
];

const REVIEWS = [
    {
        id: 1,
        userName: 'Patricia',
        rating: 5,
        review: "Muy maja y buena limpiadora"
    },
    {
        id: 2,
        userName: 'Loli',
        rating: 5,
        review: "Trabaja muy bien"
    },
    {
        id: 3,
        userName: 'Manuel',
        rating: 5,
        review: "Muy simpática y divertida"
    },
    {
        id: 4,
        userName: 'Fernando',
        rating: 5,
        review: "Encantadora"
    },
    {
        id: 5,
        userName: 'Javier',
        rating: 5,
        review: "Muy bien todo"
    }
]



cleaners.forEach((cleaner) => {

    if (cleaner.id == id)
        cleanerProfile = cleaners[cleaner.id - 1]
}
)

let cleanerName = document.getElementsByClassName('cleaner-name');
let cleanerDescription = document.getElementsByClassName('cleaner-info-p');
let cleanerWorks = document.getElementsByClassName('works');
let cleanerPrice = document.getElementsByClassName('price');
let cleanerRating = document.getElementsByClassName('rating');



cleanerName[0].textContent = cleanerProfile.name;
cleanerDescription[0].textContent = cleanerProfile.description;
cleanerWorks[0].textContent = `${cleanerProfile.worksCount} trabajos`;
cleanerPrice[0].textContent = cleanerProfile.price;
//cleanerRating[0].textContent = cleanerProfile.rating;


// let divReview = document.getElementById('review-container');

// REVIEWS.forEach((review) => {
//     divReview.innerHTML += `<div class='review'>
//         <h3 class='cleaner-info-p'>#${review.id} ${review.userName} &nbsp;<img class="star-icon" src="/assets/star.svg" style='width: 15px; margin-top: -25px;'alt> &nbsp; ${review.rating}</h3>

//         <p class='cleaner-info-p'>${review.review}</p>
//       </div>`;
// });


