const parentList = [];

let currentElement = document.querySelector("cite");

while (currentElement) {
  let currentElementName = currentElement.nodeName;
  parentList.unshift(currentElementName.toLowerCase());
  currentElement = currentElement.parentElement;
}

console.log(parentList.join(" > "));
