// console.log("JS OK");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
  .then((res) => res.json())
  .then((photo) => console.log(photo));
