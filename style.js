// GENERAL SCRIPT

// AUDIO CONTROLS
let progress = document.getElementById("progress");
let song = document.getElementById("song");
let controls = document.getElementById("ctrl-play");
let currentTimeDisplay = document.querySelector("#middle-bot small:first-child");
let durationDisplay = document.querySelector("#middle-bot small:last-child");
const volume = document.getElementById("volumeRange");

song.onloadedmetadata = () => {
  progress.max = song.duration;
  durationDisplay.textContent = formatTime(song.duration);
};
// GESTIONE PULSANTE PLAY/PAUSE
function playPause() {
  if (controls.classList.contains("bi-pause-fill")) {
    song.pause();
    controls.classList.remove("bi-pause-fill");
    controls.classList.add("bi-play-fill");
  } else {
    song.play();
    controls.classList.remove("bi-play-fill");
    controls.classList.add("bi-pause-fill");
  }
}
// GESTIONE PROGRESS BAR IN FUNZIONE DELLA TRACCIA AUDIO
song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
  currentTimeDisplay.textContent = formatTime(song.currentTime);
});

// GESTIONE PROGRESS BAR PER IL CLICK DI AVANZAMENTO NELLA TIMELINE DELLA TRACCIA
progress.oninput = () => {
  song.currentTime = progress.value;
  progress.classList.add("slider-moved");
};

// GESTIONE DEI TESTI DI DURATA AD INIZIO E FINE PROGRESS BAR
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
// GESTIONE BARRA DI VOLUME

volume.addEventListener("input", function () {
  song.volume = parseFloat(this.value);
});
song.addEventListener("volumechange", function () {
  volume.value = this.volume;
});

// EVENTO ONCLICK DEL CUORE
document.getElementById("heart").addEventListener("click", function () {
  this.classList.toggle("filled"); // Aggiunge o rimuove la classe 'filled'
});

// GESTIONE DEL DROPDOWN DELLA SIDEBAR

function dropdownBTN() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
      }
    }
  }
};

// SEARCH PAGE REQUEST
const apiKey = "1e76c6751dmshf6e51120c249691p17f828jsn056e3af8a78c";
const apiHost = "deezerdevs-deezer.p.rapidapi.com";

const params = new URLSearchParams(window.location.search);
const serachQuery = params.get("q");

// COLLEGHIAMO IL PARAMETRO RICEVUTO DALL'INPUT CON L'URL PER AGGIRNARE DINAMICAMENTE L'ENDPOINT DELLA FETCH
const form = document.getElementById("myForm");

form.addEventListener("input", () => {
  const inputSearch = document.getElementById("search-bar");
  const inputQuery = inputSearch.value;
  console.log(inputQuery);
  const searchURL = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${inputQuery}`;

  fetch(searchURL, {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": apiHost,
    },
  })
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else throw new Error("Qualcosa è andato storto");
    })

    .then((result) => {
      console.log(result);
      const container = document.getElementById("search-container");
      // container.innerHTML = "";
    })
    .catch((error) => console.log(error));
});

// ARTIST PAGE REQUEST
// const artistURL = "https://deezerdevs-deezer.p.rapidapi.com/artist/";

// // const params = new URLSearchParams(window.location.search);
// // const serachQuery = params.get("/");

// const serachQuery = "13";

// fetch(artistURL + serachQuery + "&limit=5", {
//   headers: {
//     "X-RapidAPI-Key": apiKey,
//     "X-RapidAPI-Host": apiHost,
//   },
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log(response);
//       return response.json();
//     } else throw new Error("Qualcosa è andato storto");
//   })

//   .then((artist) => {
//     console.log(artist);
//     console.log(typeof artist);

//     artist.data.forEach((bestTrack) => {
//       const album = bestTrack.album;
//       const artistCardsContainer = document.getElementById("disc-container");
//       // for (let i = 0; i < artist.length; i++) {
//       //   const album = artist[i];

//       const divColumn = document.createElement("div");
//       divColumn.classList.add("col-2");

//       const divCard = document.createElement("div");
//       divCard.classList.add("disc-card", "d-flex", "flex-column", "gap-2");

//       const divImgCard = document.createElement("div");
//       divImgCard.setAttribute("id", "d-img-card");

//       const imgCard = document.createElement("img");
//       imgCard.src = album.cover;

//       const playerBtn = document.createElement("div");
//       playerBtn.classList.add("d-play-circle", "d-flex");

//       const iconePlay = document.createElement("img");
//       iconePlay.src = "./assets/imgs/play-svg.svg";

//       const divCardText = document.createElement("div");
//       divCardText.classList.add("d-card-body", "d-flex", "flex-column");

//       const h4Card = document.createElement("h4");
//       h4Card.innerText = album.title;

//       const h5Card = document.createElement("h5");
//       h5Card.innerText = album.type;

//       divCardText.appendChild(h4Card);
//       divCardText.appendChild(h5Card);

//       divImgCard.appendChild(imgCard);
//       playerBtn.appendChild(iconePlay);
//       divImgCard.appendChild(playerBtn);

//       divCard.appendChild(divImgCard);
//       divCard.appendChild(divCardText);

//       divColumn.appendChild(divCard);
//       artistCardsContainer.appendChild(divColumn);
//     });
//   })
//   .catch((error) => console.log(error));
