////////////////ASIDE PLAYLISTS////////////////

// Funzione generazione di un numero casuale (min e max)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Array di immagini
const images = [
  "./assets/imgs/search/image-1.jpeg",
  "./assets/imgs/search/image-2.jpg",
  "./assets/imgs/search/image-3.jpg",
  "./assets/imgs/search/image-4.jpg",
  "./assets/imgs/search/image-5.jpg",
  "./assets/imgs/search/image-6.jpg",
  "./assets/imgs/search/image-7.jpg",
  "./assets/imgs/search/image-8.jpg",
  "./assets/imgs/search/image-9.jpg",
  "./assets/imgs/search/image-10.jpg",
  "./assets/imgs/search/image-11.jpg",
  "./assets/imgs/search/image-12.jpg",
  "./assets/imgs/search/image-13.jpeg",
  "./assets/imgs/search/image-14.jpg",
  "./assets/imgs/search/image-15.jpg",
  "./assets/imgs/search/image-16.jpg",
  "./assets/imgs/search/image-17.jpg",
  "./assets/imgs/search/image-18.jpg",
  "./assets/imgs/search/image-19.jpg",
  "./assets/imgs/search/image-20.jpg",
];
// Array di titoli
const titles = [
  "Discover Weekly",
  "Dissect",
  "Pollen",
  "Mint",
  "Viva Latino",
  "R&B",
  "Rock This",
  "Beast Mode",
  "Written by Nija",
  "Lo-Fi Beats",
  "Songs to sing",
  "All Out '10s",
  "Your Summer",
  "Top Songs Global",
  "Unlocking Us", //Podcast
  "Soul Lounge",
  "Stress Relief",
  "Sleep",
  "Island Pop",
  "Jazz Appreciation",
];

// Elementi del DOM dove inserire gli elementi dinamici
const playlistContainer = document.getElementById("playlist");

// Numero di elementi da generare
const numItems = 8;

// Generazione e inserimento di elementi dinamici nel div "playlist" dell'aside
for (let i = 0; i < numItems; i++) {
  // Genera un indice casuale per selezionare l'immagine e il titolo
  const randomIndex = getRandomNumber(0, images.length - 1);

  const playlistDiv = document.createElement("div");
  playlistDiv.classList.add("list-item", "d-flex", "align-items-center", "py-1", "ps-1");

  const playlistImg = document.createElement("a");
  playlistImg.href = "#";
  playlistImg.setAttribute("id", "playlist-img");
  playlistDiv.appendChild(playlistImg);

  const playlistImage = document.createElement("img");
  playlistImage.src = images[randomIndex];
  playlistImage.classList.add("img-fluid", "rounded");
  playlistImg.appendChild(playlistImage);

  const playlistInfo = document.createElement("div");
  playlistInfo.setAttribute("id", "playlist-info");
  playlistInfo.classList.add("ms-2");
  playlistDiv.appendChild(playlistInfo);

  const playlistTitle = document.createElement("a");
  playlistTitle.href = "#";
  playlistTitle.classList.add("mb-0", "fw-bold");
  playlistTitle.innerText = titles[randomIndex];
  playlistInfo.appendChild(playlistTitle);

  const playlistType = document.createElement("a");
  playlistType.href = "#";
  playlistType.classList.add("mb-0", "fw-light");
  playlistType.innerText = "Playlist";
  playlistInfo.appendChild(playlistType);

  playlistContainer.appendChild(playlistDiv);
}

////////////////TOP CARDS////////////////
const rowDiv = document.querySelector(".row.gap-2");
const numTopCards = 8;

for (let i = 0; i < numTopCards; i++) {
  const randomIndex = getRandomNumber(0, images.length);

  const topCardDiv = document.createElement("div");
  topCardDiv.setAttribute("id", "top-card");
  topCardDiv.classList.add("col-auto", "d-flex");
  topCardDiv.style = "width:290px";

  const img = document.createElement("img");
  img.src = images[randomIndex];

  const colDiv = document.createElement("div");
  colDiv.classList.add("col-auto");

  const h4 = document.createElement("h4");
  h4.innerText = titles[randomIndex];
  colDiv.classList.add("col-auto");
  colDiv.appendChild(h4);

  const playStopDiv = document.createElement("div");
  playStopDiv.setAttribute("id", "play-stop");
  const playIcon = document.createElement("i");
  playIcon.classList.add("bi", "bi-play-fill");
  playStopDiv.appendChild(playIcon);

  topCardDiv.appendChild(img);
  topCardDiv.appendChild(colDiv);
  topCardDiv.appendChild(playStopDiv);

  rowDiv.appendChild(topCardDiv);
}
////////////////RACCLTA TOP 50////////////////
const top50Div = document.getElementById("top50");

for (let i = 0; i < 6; i++) {
  const randomIndex = getRandomNumber(0, images.length);

  const divCol = document.createElement("div");
  divCol.classList.add("col-2", "p-1");

  const stileCardDiv = document.createElement("div");
  stileCardDiv.classList.add("stile-card");

  const positionButtonDiv = document.createElement("div");
  positionButtonDiv.classList.add("position-button");

  const image = document.createElement("img");
  image.src = images[randomIndex];
  image.classList.add("img-fluid", "card-img-top", "img-cards");

  const playButtonDiv = document.createElement("div");
  playButtonDiv.classList.add("play-button");
  const playButtonSvg = document.createElement("svg");
  playButtonSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  playButtonSvg.setAttribute("width", "16");
  playButtonSvg.setAttribute("height", "16");
  playButtonSvg.setAttribute("fill", "currentColor");
  playButtonSvg.setAttribute("class", "bi bi-play-fill");
  playButtonSvg.setAttribute("viewBox", "0 0 16 16");
  const playButtonPath = document.createElement("path");
  playButtonPath.setAttribute(
    "d",
    "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"
  );

  playButtonSvg.appendChild(playButtonPath);
  playButtonDiv.appendChild(playButtonSvg);

  positionButtonDiv.appendChild(image);
  positionButtonDiv.appendChild(playButtonDiv);

  const cardTextDiv = document.createElement("div");
  cardTextDiv.classList.add("card-text");

  const h6 = document.createElement("h6");
  h6.innerText = titles[randomIndex];

  const p = document.createElement("p");
  p.innerText = titles[randomIndex - 1];

  cardTextDiv.appendChild(h6);
  cardTextDiv.appendChild(p);

  stileCardDiv.appendChild(positionButtonDiv);
  stileCardDiv.appendChild(cardTextDiv);

  divCol.appendChild(stileCardDiv);
  top50Div.appendChild(divCol);
}
////////////////RACCLTA TOP 100////////////////
const top100Div = document.getElementById("top100");

for (let i = 0; i < 6; i++) {
  const randomIndex = getRandomNumber(0, images.length);

  const divCol = document.createElement("div");
  divCol.classList.add("col-2", "p-1");

  const stileCardDiv = document.createElement("div");
  stileCardDiv.classList.add("stile-card");

  const positionButtonDiv = document.createElement("div");
  positionButtonDiv.classList.add("position-button");

  const image = document.createElement("img");
  image.src = images[randomIndex];
  image.classList.add("img-fluid", "card-img-top", "img-cards");

  const playButtonDiv = document.createElement("div");
  playButtonDiv.classList.add("play-button");
  const playButtonSvg = document.createElement("svg");
  playButtonSvg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  // playButtonSvg.setAttribute("width", "16");
  // playButtonSvg.setAttribute("height", "16");
  playButtonSvg.setAttribute("fill", "currentColor");
  playButtonSvg.setAttribute("class", "bi bi-play-fill");
  playButtonSvg.setAttribute("viewBox", "0 0 16 16");
  const playButtonPath = document.createElement("path");
  playButtonPath.setAttribute(
    "d",
    "m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"
  );

  playButtonSvg.appendChild(playButtonPath);
  playButtonDiv.appendChild(playButtonSvg);

  positionButtonDiv.appendChild(image);
  positionButtonDiv.appendChild(playButtonDiv);

  const cardTextDiv = document.createElement("div");
  cardTextDiv.classList.add("card-text");

  const h6 = document.createElement("h6");
  h6.innerText = titles[randomIndex];

  const p = document.createElement("p");
  p.innerText = titles[randomIndex - 1];

  cardTextDiv.appendChild(h6);
  cardTextDiv.appendChild(p);

  stileCardDiv.appendChild(positionButtonDiv);
  stileCardDiv.appendChild(cardTextDiv);

  divCol.appendChild(stileCardDiv);
  top100Div.appendChild(divCol);
}
