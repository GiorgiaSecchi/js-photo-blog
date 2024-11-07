// console.log("JS OK");

const photosRow = document.getElementById("photos-row");
console.log(photosRow);

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((photos) => {
    console.log(photos);

    photos.forEach((photo) => {
      photosRow.innerHTML += `
       <div class="col px-4">
            <div id="${photo.id}" class="card position-relative h-100">
              <img
                src="./img/pin.svg"
                alt="Pin"
                class="pin-svg position-absolute top-0 start-50 translate-middle"
              />
              <img
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
  });
