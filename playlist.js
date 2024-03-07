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
  "Songs to sing in the car",
  "All Out '10s",
  "Your Summer Rewind",
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
  const randomIndex = getRandomNumber(0, images.length - 1);

  const topCardDiv = document.createElement("div");
  topCardDiv.setAttribute("id", "top-card");
  topCardDiv.classList.add("col-auto", "flex-fill", "d-flex");
  topCardDiv.style.width = "20%";

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
