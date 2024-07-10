export const ModalComponent = (color, ...component) => {
  component = component !== undefined ? component.join("") : "";

  return `
    <div class="modal">
      ${component}  
    </div>`
}