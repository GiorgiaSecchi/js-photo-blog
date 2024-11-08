// console.log("JS OK");

const photosRowEl = document.getElementById("photos-row");
console.log(photosRowEl);

const overlayEl = document.getElementById("overlay");
console.log(overlayEl);

const buttonCloseEl = document.getElementById("btn-close");
console.log(buttonCloseEl);

const imageOverlayEl = document.getElementById("imageOverlay");
console.log(imageOverlayEl);

//# CHIAMATA API
fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((photos) => {
    console.log(photos);

    //* Genero le 6 foto con i dati della chiamata

    photos.forEach((photo) => {
      photosRowEl.innerHTML += `
       <div class="col px-4">
            <div class="card position-relative h-100 shadow">
              <img
                src="./img/pin.svg"
                alt="Pin"
                class="pin-svg position-absolute top-0 start-50 translate-middle"
              />
              <img
                data-id="${photo.id}"
                src="${photo.url}"
                class="card-img-top p-3"
                alt="Photo: ${photo.id}"
              />
              <div class="card-body pt-0">
                <p class="card-text text-start text-capitalize">
                  ${photo.title}
                </p>
              </div>
            </div>
          </div> `;
    });

    //* Raccolgo le immagini delle card in un unica variabile

    const imagesCardEl = document.querySelectorAll(".card-img-top");
    console.log(imagesCardEl);

    //* Al click di ogni immagine:
    //* rimozione d-none (compare overlay) + aggiorno il src di overlay con img cliccata

    imagesCardEl.forEach((image) => {
      image.addEventListener("click", () => {
        const photoId = image.getAttribute("data-id");
        console.log(`ID Immagine: ${photoId}`);

        imageOverlayEl.src = image.src;
        overlayEl.classList.remove("d-none");
      });
    });

    //* Bottone che al click riaggiunge d-none (scompare overlay)

    buttonCloseEl.addEventListener("click", () =>
      overlayEl.classList.add("d-none")
    );
  });
