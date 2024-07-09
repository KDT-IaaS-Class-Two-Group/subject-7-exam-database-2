import { tagComponent } from "../module/TagComponent.js";

export const assembly = {

  column : (jsonData, tagName,className)=>{

    const root = document.getElementById("root")
    root.innerHTML = tagComponent(tagName,"",`class = ${className}`)
    
    const column = Object.keys(jsonData[0])
    
    let columnElement = ""
    
    for(let element of column){
      columnElement += tagComponent(tagName,element)
    }
    
    const container = document.querySelector(`.${className}`)
    
    container.innerHTML = columnElement
  },

  rowElement : (jsonData,tagName,className) => {
    const root = document.getElementById("root")
    jsonData.forEach(item => {
      let rowElement = "";

      for (let key in item) {
        rowElement += tagComponent(tagName, item[key], `class= ${className}`);
      }
      root.innerHTML += tagComponent(tagName, rowElement,  `class= ${className}`);
    });
  }
}

