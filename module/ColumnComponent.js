const columnComponent = (jsonData,tagName,className)=>{

  const root = document.getElementById("root")
  root.innerHTML = tagComponent(tagName,"",`class = ${className}`)
  
  const column = Object.keys(jsonData[0])
  
  let columnElement = ""
  
  for(let element of column){
    columnElement += tagComponent(tagName,element)
  }
  
  return columnElement
}
  const container = document.querySelector(`.${className}`)
  container.innerHTML = columnElement