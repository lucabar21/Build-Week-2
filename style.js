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
