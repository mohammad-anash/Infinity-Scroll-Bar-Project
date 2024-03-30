const container = makeAndFixElement("div", "class", "container", document.body);

function createBoxes(n) {
  const frangment = document.createDocumentFragment();
  for (let i = 1; i <= n; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    frangment.appendChild(box);
  }

  container.append(frangment);
  return frangment;
}

function makeAndFixElement(ele, attType, attName, appendWith) {
  const element = document.createElement(ele);

  if (!!attType && !!attName) {
    element.setAttribute(attType, attName);
  }
  if (!!appendWith) {
    appendWith.append(element);
  }

  return element;
}

window.addEventListener("scroll", function () {
  // console.log(window.innerHeight+ window.scrollY);
  // console.log(document.body.offsetHeight);
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight + 200) {
    createBoxes(4);
  }
});
createBoxes(16);
