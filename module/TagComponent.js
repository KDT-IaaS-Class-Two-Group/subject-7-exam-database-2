export const tagComponent = (tagName, textNode, ...attribute)=>{
  return `<${tagName} ${attribute}>${textNode}</${tagName}>`
}