/* HERO DINAMICA */

const artistURL = "https://deezerdevs-deezer.p.rapidapi.com/artist/";
const apiKeyArtist = "d2c36d775bmshf4d252608fc058ap1f7befjsnc823b8588e4a";
const apiHostArtist = "deezerdevs-deezer.p.rapidapi.com";

/* const params = new URLSearchParams(window.location.search); */

const searchQuery = "412";
//Recuperiamo i dati con la fetch
fetch(artistURL + searchQuery, {
  headers: {
    "X-RapidAPI-Key": apiKeyArtist,
    "X-RapidAPI-Host": apiHostArtist,
  },
})
  .then((response) => {
    if (response.ok) {
      console.log(response);
      return response.json();
    } else throw new Error("Qualcosa è andato storto");
  })

  //Generiamo il nome e l'immagine dell'artista
  .then((artist) => {
    console.log(artist);
    const nomeArtista = document.getElementById("hero-h1");
    const h1Nome = document.createElement("h1");

    h1Nome.innerText = artist.name;
    nomeArtista.appendChild(h1Nome);

    const heroArtist = document.getElementById("hero-artist");
    const imgArtist = document.createElement("img");

    imgArtist.src = artist.picture_big;
    heroArtist.appendChild(imgArtist);

    //Generiamo le tracks//

    const tracksContainer = document.getElementById("container-tracks");
    /* console.log(tracksContainer); */

    const popTracks = document.createElement("div");
    popTracks.classList.add("d-flex", "gap-4");
    popTracks.setAttribute("id", "pop-tracks");

    const artNum = document.createElement("div");
    artNum.setAttribute("id", "art-num");
    const h4Tracks = document.createElement("h4");
    h4Tracks.innerText = "1";

    const artDetails = document.createElement("div");
    artDetails.setAttribute("id", "art-details");
    artDetails.classList.add("d-flex", "gap-3", "me-auto");

    const imgDiv = document.createElement("div");
    imgDiv.className = "art-img";
    const imgTrack = document.createElement("img");
    imgTrack.src = artist.picture_small;

    const artText = document.createElement("div");
    artText.classList.add("art-text", "d-flex", "flex-column");
    const titoloCanzone = document.createElement("a");
    titoloCanzone.innerText = "Titolo canzone";
    const nameArtista = document.createElement("a");
    nameArtista.innerText = artist.name;

    const divAscolti = document.createElement("div");
    divAscolti.className = "me-auto";
    divAscolti.setAttribute("id", "art-listens");
    const h5Ascolti = document.createElement("h5");
    h5Ascolti.innerText = "1.876.532";

    const artDurationDiv = document.createElement("div");
    artDurationDiv.setAttribute("id", "art-duration");
    const h5Time = document.createElement("h5");
    h5Time.innerText = "3.15";

    tracksContainer.appendChild(popTracks);
    popTracks.appendChild(artNum);
    artNum.appendChild(h4Tracks);
    artDetails.appendChild(imgDiv);
    imgDiv.appendChild(imgTrack);
    artText.appendChild(titoloCanzone);
    artText.appendChild(nameArtista);
    divAscolti.appendChild(h5Ascolti);
    artDurationDiv.appendChild(h5Time);
  });
