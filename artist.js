/* HERO DINAMICA */

const artistURL = " https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=10";
const apiKeyArtist = "d2c36d775bmshf4d252608fc058ap1f7befjsnc823b8588e4a";
const apiHostArtist = "deezerdevs-deezer.p.rapidapi.com";

/* const params = new URLSearchParams(window.location.search); */

// const searchQuery = "412";
//Recuperiamo i dati con la fetch
fetch(artistURL, {
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

    //Generiamo le tracks//
    const traccia = artist.data[0];

    const nomeArtista = document.getElementById("hero-h1");
    const h1Nome = document.createElement("h1");

    h1Nome.innerText = traccia.artist.name;
    nomeArtista.appendChild(h1Nome);

    const heroArtist = document.getElementById("hero-artist");
    const imgArtist = document.createElement("img");

    imgArtist.src = traccia.album.cover_big;
    heroArtist.appendChild(imgArtist);
    /////FOR EACH////
    artist.data.forEach((traccia, index) => {
      console.log(traccia);

      console.log(artist);

      const tracksContainer = document.getElementById("container-tracks");
      /* console.log(tracksContainer); */

      const popTracks = document.createElement("div");
      popTracks.classList.add("d-flex", "gap-4");
      popTracks.setAttribute("id", "pop-tracks");

      const artNum = document.createElement("div");
      artNum.setAttribute("id", "art-num");
      const h4Tracks = document.createElement("h4");
      h4Tracks.innerText = index + 1;

      const artDetails = document.createElement("div");
      artDetails.setAttribute("id", "art-details");
      artDetails.classList.add("d-flex", "gap-3", "me-auto");

      const imgDiv = document.createElement("div");
      imgDiv.className = "art-img";
      const imgTrack = document.createElement("img");
      imgTrack.src = traccia.album.cover_small;

      const artText = document.createElement("div");
      artText.classList.add("art-text", "d-flex", "flex-column");
      const titoloCanzone = document.createElement("a");
      titoloCanzone.className = "text-white";
      titoloCanzone.setAttribute("id", "Title-t");
      titoloCanzone.innerText = traccia.title;
      const nameArtista = document.createElement("a");
      nameArtista.style = "color: #a7a7a7";
      nameArtista.innerText = traccia.artist.name;

      const divAscolti = document.createElement("div");
      divAscolti.className = "me-3";
      divAscolti.setAttribute("id", "art-listens");
      const h5Ascolti = document.createElement("h5");
      h5Ascolti.innerText = traccia.rank;

      const artDurationDiv = document.createElement("div");
      artDurationDiv.setAttribute("id", "art-duration");
      const h5Time = document.createElement("h5");
      h5Time.innerText = traccia.duration;

      artDurationDiv.appendChild(h5Time); //1//
      divAscolti.appendChild(h5Ascolti); //2//
      artText.appendChild(titoloCanzone); //3//
      artText.appendChild(nameArtista); //4//
      imgDiv.appendChild(imgTrack); //5//
      artDetails.appendChild(imgDiv); //7//
      artDetails.appendChild(artText); //6//
      artNum.appendChild(h4Tracks); //8//
      popTracks.appendChild(artNum); //9//
      popTracks.appendChild(artDetails); //10//
      popTracks.appendChild(divAscolti); //11//
      popTracks.appendChild(artDurationDiv); //12//
      tracksContainer.appendChild(popTracks);
    });
  });

//Richiediamo  dati delle tracce artista//

// const tracciaURL = " https://striveschool-api.herokuapp.com/api/deezer/artist/412/top?limit=10";

// fetch(tracciaURL, {
//   headers: {
//     "X-RapidAPI-Key": apiKeyArtist,
//     "X-RapidAPI-Host": apiHostArtist,
//   },
// })
//   .then((response) => {
//     if (response.ok) {
//       console.log(response);
//       return response.json();
//     } else throw new Error("Qualcosa è andato storto");
//   })

//   .then((traccia) => {
//     console.log(traccia);
//     const titleTrack = document.getElementById("Title-t");
//     titleTrack.innerText = traccia.data[0].title;

//     const titleTrackDiv = document.querySelector(".art-text");
//     titleTrackDiv.appendChild(titleTrack);
//   });
