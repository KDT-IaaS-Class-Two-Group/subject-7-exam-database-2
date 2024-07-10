const rowElement = (jsonData,tagName,className) => {
  const root = document.getElementById("root")
  jsonData.forEach(item => {
    let rowElement = "";

    for (let key in item) {
      rowElement += tagComponent(tagName, item[key], `class= ${className}`);
    }
    root.innerHTML += tagComponent(tagName, rowElement,  `class= ${className}`);
  });
  return rowElement
}