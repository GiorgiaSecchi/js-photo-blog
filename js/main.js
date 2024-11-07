// console.log("JS OK");

const photosRow = document.getElementById("photos-row");
console.log(photosRow);

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((photos) => {
    console.log(photos);

    photos.forEach((photo) => {
      photosRow.innerHTML += `
       <div class="col">
            <div class="card position-relative">
              <img
                src="./img/pin.svg"
                alt="Pin"
                class="pin-svg position-absolute top-0 start-50 translate-middle"
              />
              <img
                src="./img/6409f98830205.jpg"
                class="card-img-top p-3"
                alt="Foto 1"
              />
              <div class="card-body pt-0">
                <p class="card-text text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div> `;
    });
  });
