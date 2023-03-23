/* 
Consegna:
Dato un array di oggetti letterali con:
url dell’immagine
titolo
descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il ciclo infinito del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay. 
*/

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

console.log(images);

/*
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider. 
*/

/*
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo. 
*/

const imagesElement = document.querySelector('.images');

// dall'array images estraggo le immagini con filter in un nuovo array

const imageArray = images.map(img => img.image);
console.log(imageArray);

// mi creo altri 2 array dove estrapolo dall'array originale i titoli e le descrizioni
const titleArray = images.map(img => img.title);
console.log(titleArray);

const textArray = images.map(img => img.text);
console.log(textArray);

// mi seleziono gli elementi della dom title and text per inserisci poi gli elementi dall'array

const titleEl = document.getElementById("titles");
const textEl = document.getElementById("texts");

let activeImage = 0;

// Questa è la funzione per inserire nella dom e far scorrere le immagini grazie ai pulsanti
imageArray.forEach((image, i) => {
  // per ogni immagine mi creo un elemento dentro imgs nella dom
  // prima però mi creo il template literal da inserire
  const imgSrc = image;
  const activebehavior = i === activeImage ? "active" : "";
  const imgElement = `<img class="img-fluid ${activebehavior}" src="./assets/${imgSrc}" alt="">`;
  imagesElement.insertAdjacentHTML("beforeend", imgElement);
});

// mi creo altre due funzioni per inserire i text e i title
titleArray.forEach((title, i) => {
  const activebehavior = i === activeImage ? "active" : "";
  const titleElement = `<h2 class="${activebehavior}">${title}</h2>`;
  titleEl.insertAdjacentHTML('beforeend', titleElement);
});

textArray.forEach((text, i) => {
  const activebehavior = i === activeImage ? "active" : "";
  const textElement = `<h3 class="${activebehavior}">${text}</h3>`;
  textEl.insertAdjacentHTML('beforeend', textElement);
});

// PULSANTE UP
// seleziono tutte le img per potergli dare l'active dopo
const slideImagesElements = document.querySelectorAll("img");
// seleziono tutti i titoli e i testi 
const slideTitleElements = document.querySelectorAll("h2");
const slideTextElements = document.querySelectorAll("h3");

// seleziono il pulsante UP e creo una variabile
const nextEl = document.querySelector(".position_up");

// ascolto il pulsante UP
nextEl.addEventListener("click", function () {
  console.log("cliccato up");
  console.log(slideImagesElements);

  // seleziono la slide corrente
  const currentSlide = slideImagesElements[activeImage];
  // seleziono il testo e i titoli correnti
  const currentTitle = slideTitleElements[activeImage];
  const currentText = slideTextElements[activeImage];
  // console.log(currentSlide);
  // console.log(currentText);
  // console.log(currentTitle);

  // rimuovo dalla slide corrente la classe active
  currentSlide.classList.remove("active");
  currentText.classList.remove("active");
  currentTitle.classList.remove("active");

  // incremento il valore della variabile nel ciclo for sopra
  activeImage++;
  // console.log(activeImage);

  // se l'immagine è l'ultima allora resetto lo slider alla prima 
  if (activeImage >= images.length) {
    activeImage = 0;
  }

  // seleziono la prossima immagine
  const nextImage = slideImagesElements[activeImage];
  const nextTitle = slideTitleElements[activeImage];
  const nextText = slideTextElements[activeImage];

  // e le aggiungo la classe active
  console.log(nextImage);
  nextImage.classList.add("active");
  nextTitle.classList.add("active");
  nextText.classList.add("active");
});
// PULSANTE BOT
const prevEl = document.querySelector(".position_bot");

// ascolto il pulsante bot
prevEl.addEventListener("click", function () {
  console.log("cliccato prev");

  console.log(slideImagesElements); //array[index]

  // seleziono la slide corrente
  const currentSlide = slideImagesElements[activeImage];
  const currentTitle = slideTitleElements[activeImage];
  const currentText = slideTextElements[activeImage];

  // rimuovo dalla slide corrente la classe active
  currentSlide.classList.remove("active");
  currentTitle.classList.remove("active");
  currentText.classList.remove("active");

  // riduco il valore della variabile nel ciclo for sopra
  activeImage--;
  console.log(activeImage);
  // se l'immagine è la prima allora resetto lo slider all'ultima immagine
  if (activeImage < 0) {
    activeImage = images.length - 1;
  }

  // seleziono la prossima immagine
  const nextImage = slideImagesElements[activeImage];
  const nextText = slideTextElements[activeImage];
  const nextTitle = slideTitleElements[activeImage];

  // aggiungo la classe active alla prossima immagine
  console.log(nextImage);
  nextImage.classList.add("active");
  nextText.classList.add("active");
  nextTitle.classList.add("active");
});



