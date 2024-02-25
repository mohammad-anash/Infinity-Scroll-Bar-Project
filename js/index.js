const container = makeAndFixElement("div", "class", "container", document.body);

function createBoxes(n) {
  for (let i = 1; i <= n; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
  }
  return container;
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

window.addEventListener("scroll", function (e) {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    createBoxes(16);
  }
});
createBoxes(16);
