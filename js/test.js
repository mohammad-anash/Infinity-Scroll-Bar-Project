// // some element selected by class
// function qs(selector) {
//   return document.querySelector(selector);
// }

// const container = qs(".container");
// const slideContainer = qs(".slide-container");
// const fragment = document.createDocumentFragment();

// // some element selected by id
// function selectElement(select) {
//   return document.getElementById(select);
// }

// const iconEl = selectElement("icon");
// const leftEl = selectElement("left");
// const imgEl = selectElement("img");
// const rightEl = selectElement("right");
// const mainContainer = selectElement("main-container");

// const imgArr = [];
// let counter = 1;
// function createBoxes(n) {
//   for (let i = 0; i < n; i++) {
//     const box = document.createElement("div");
//     const imgDiv = document.createElement("img");

//     // Placeholder image URL from Picsum for demonstration
//     imgDiv.src = `https://picsum.photos/id/${i + 10}/200/300`;
//     box.classList.add("box");

//     imgArr.push(imgDiv);
//     box.appendChild(imgDiv);
//     fragment.appendChild(box);
//   }
//   container.append(fragment);

//   console.log(imgArr);
// }

// createBoxes(16);

// window.addEventListener("scroll", function (event) {
//   if (Math.floor(this.scrollY) === 175) {
//     // corrected scrollY reference
//     createBoxes(16);
//     // console.log("done");
//   }
// });

// mainContainer.addEventListener("click", addImageFunctionality);

// function addImageFunctionality(event) {
//   event.preventDefault();
//   if (event.target.tagName === "IMG") {
//     createImageSlider(event.target);
//     container.classList.add("overlay");
//     slideContainer.style.display = "block";
//   }

//   if (event.target.id === "icon") {
//     // container.classList.remove("overlay");

//     slideContainer.style.display = "none";
//   }
// }

// function createImageSlider(element) {
//   imgEl.append(element);
// }
