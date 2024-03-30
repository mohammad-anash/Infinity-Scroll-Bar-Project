const container = document.querySelector(".container");
const mainContaiener = document.querySelector(".main-container");
const imageContainer = document.querySelector(".img-visible");
let selectedImg;

function generateImage(n) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < n; i++) {
    const imgDiv = document.createElement("img");

    imgDiv.classList.add("img-div");
    imgDiv.src = `https://picsum.photos/id/${i + 10}/200/150`;
    fragment.append(imgDiv);
  }
  container.appendChild(fragment);
}

generateImage(30);
mainContaiener.addEventListener("click", controllerFunctionality);

function controllerFunctionality(event) {
  switch (event.target.className) {
    case "img-div":
      selectedImg = event.target;
      handleImageFunctionality(event, "visible");
      break;
    case "close":
      imageContainer.style.display = "none";
      break;
    case "next":
      selectedImg = selectedImg.nextElementSibling;
      if (!selectedImg) {
        selectedImg = container.firstElementChild;
        handleImageFunctionality(selectedImg, "next");
      } else {
        handleImageFunctionality(selectedImg, "next");
      }
      break;
    case "previous":
      selectedImg = selectedImg.previousElementSibling;
      if (!selectedImg) {
        selectedImg = container.lastElementChild;
        handleImageFunctionality(selectedImg, "previous");
      } else {
        handleImageFunctionality(selectedImg, "previous");
      }
      break;
  }
}

function handleImageFunctionality(element, operationType) {
  const img = imageContainer.querySelector("img");
  if (operationType == "visible") {
    img.src = element.target.src;
    imageContainer.style.display = "block";
  } else if (operationType == "next") {
    img.src = element.currentSrc;
    selectedImg = element;
  } else if (operationType === "previous") {
    img.src = element.currentSrc;
    selectedImg = element;
  }
}
