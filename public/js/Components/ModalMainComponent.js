export const ModalMainComponent = (name, color, ...component) => {
  component = component !== undefined ? component.join("") : "";

  return `
    <div class="modal-main">
      <div class="modal-main-header">${name}</div>
      ${component}
    </div>
      `
}



