export const ModalComponent = (style, ...component) => {
  component = component !== undefined ? component.join("") : "";
  style = style !== undefined ? style : "";

  return `
    <div class="modal" style="${style}">
      ${component}  
    </div>`
}