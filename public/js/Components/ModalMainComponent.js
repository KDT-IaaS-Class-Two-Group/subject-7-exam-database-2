export const ModalMainComponent = (name, style, ...component) => {
  component = component !== undefined ? component.join("") : "";
  style = style !== undefined ? style : "";

  return `
    <div class="modal-main">
      <div class="modal-main-header" style="${style}">${name}</div>
      ${component}
    </div>
      `
}



