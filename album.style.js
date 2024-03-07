// Url singolo album

const albumURL = "https://deezerdevs-deezer.p.rapidapi.com/album/11898198";

const albumApiKey = "1574344909msh77fe34399f8611bp1548aejsn141c02c19be4";
const albumApiHost = "deezerdevs-deezer.p.rapidapi.com";

fetch(albumURL, {
  headers: {
    "X-RapidAPI-Key": albumApiKey,
    "X-RapidAPI-Host": albumApiHost,
  },
})
  .then((resp) => {
    console.log(resp);
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("ERRORE NEL REPERIMENTO DATI");
    }
  })
  .then((album) => {
    console.log(album);

    // sezione 1 della copertina dell'album

    const titleAlbum = document.getElementById("title-album");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const imgAlbum = document.createElement("img");
    imgAlbum.classList.add("img-fluid", "ms-2", "mb-4", "me-4", "img-album");
    imgAlbum.alt = "copertina album";
    imgAlbum.src = album.cover_medium;

    const textAlbum = document.createElement("div");
    textAlbum.classList.add("row", "d-flex", "flex-column", "gap-2");

    const pDiv = document.createElement("div");
    const p = document.createElement("p");
    p.classList.add("fw-bold", "mb-0");
    p.innerText = "Album";

    const h1Div = document.createElement("div");
    h1Div.classList.add("title-h1-album");
    const h1 = document.createElement("h1");
    h1.textContent = album.title;

    const specDiv = document.createElement("div");
    specDiv.classList.add("d-flex", "gap-1", "align-items-center");
    const imgSpec = document.createElement("img");
    imgSpec.classList.add("img-mini");
    imgSpec.alt = "mini-img";
    imgSpec.src = album.artist.picture_small;

    const pAutore = document.createElement("p");
    pAutore.classList.add("fw-bold", "mt-3", "ms-1");
    pAutore.textContent = album.artist.name;

    const spanPunto1 = document.createElement("span");
    spanPunto1.innerHTML = "&#8226";

    const dataCreazione = document.createElement("p");
    dataCreazione.classList.add("fw-bold", "mt-3", "ms-1");
    dataCreazione.textContent = album.release_date;

    const spanPunto2 = document.createElement("span");
    spanPunto2.innerHTML = "&#8226";

    const totBrani = document.createElement("p");
    totBrani.classList.add("fw-bold", "mt-3", "ms-1");
    totBrani.textContent = album.nb_tracks + " " + "Brani,";

    const tempo = document.createElement("p");
    tempo.classList.add("fw-bold", "mt-3", "ms-1");
    tempo.textContent = album.duration;

    specDiv.appendChild(imgSpec);
    specDiv.appendChild(pAutore);
    specDiv.appendChild(spanPunto1);
    specDiv.appendChild(dataCreazione);
    specDiv.appendChild(spanPunto2);

    specDiv.appendChild(totBrani);
    specDiv.appendChild(tempo);

    pDiv.appendChild(p);
    h1Div.appendChild(h1);
    textAlbum.appendChild(pDiv);
    textAlbum.appendChild(h1Div);
    textAlbum.appendChild(specDiv);

    imgContainer.appendChild(imgAlbum);

    titleAlbum.appendChild(imgContainer);
    titleAlbum.appendChild(textAlbum);

    // RICHIAMO L'ARRAY DELLE CANZONI CONTENUTE NELL'ALBUM
    const tracks = album.tracks.data;
    return tracks;
  })
  .then((tracks) => {
    console.log(tracks);

    const tracksContainer = document.getElementById("list-album");
    tracks.forEach((track, index) => {
      const firstDivTrack = document.createElement("div");
      firstDivTrack.classList.add(
        "music-list",
        "d-flex",
        "flex-column",
        "gap-3",
        "my-3"
      );

      const secondDivTrack = document.createElement("div");
      secondDivTrack.classList.add(
        "d-flex",
        "gap-4",
        "my-2",
        "mx-3",
        "align-items-center"
      );

      const h4Div = document.createElement("div");
      const h4 = document.createElement("h4");
      h4.textContent = index + 1;

      h4Div.appendChild(h4);

      const firstDivTitle = document.createElement("div");
      firstDivTitle.classList.add("d-flex", "gap-3", "align-items-center");

      const secondDivTitle = document.createElement("div");
      secondDivTitle.classList.add("info-artist", "d-flex", "flex-column");

      const aTitle = document.createElement("a");
      aTitle.href = "#";
      aTitle.textContent = track.title;

      secondDivTitle.appendChild(aTitle);

      const aName = document.createElement("a");
      aName.href = "#";
      aName.textContent = track.artist.name;

      secondDivTitle.appendChild(aName);

      const firstDivIcon = document.createElement("div");
      firstDivIcon.classList.add(
        "ms-auto",
        "d-flex",
        "gap-5",
        "align-items-center"
      );

      const secondDivIcon = document.createElement("div");

      const heartIcon = document.createElement("i");
      heartIcon.classList.add("bi", "bi-heart");

      secondDivIcon.appendChild(heartIcon);

      const divTimeIcon = document.createElement("div");
      divTimeIcon.classList.add("d-flex", "gap-2");

      const divTime = document.createElement("div");
      divTime.classList.add("time");

      const time = document.createElement("span");
      time.style.margin = "unset";
      time.textContent = track.duration;

      const divIconMenu = document.createElement("div");

      const iconMenu = document.createElement("i");
      iconMenu.classList.add("bi", "bi-three-dots");

      divTime.appendChild(time);
      divIconMenu.appendChild(iconMenu);
      divTimeIcon.appendChild(divTime);
      divTimeIcon.appendChild(divIconMenu);
      firstDivIcon.appendChild(secondDivIcon);
      firstDivIcon.appendChild(divTimeIcon);
      firstDivTitle.appendChild(secondDivTitle);
      secondDivTrack.appendChild(h4Div);
      secondDivTrack.appendChild(firstDivTitle);
      secondDivTrack.appendChild(firstDivIcon);
      firstDivTrack.appendChild(secondDivTrack);
      tracksContainer.appendChild(firstDivTrack);
    });
  })

  .catch((err) => console.log(err));
