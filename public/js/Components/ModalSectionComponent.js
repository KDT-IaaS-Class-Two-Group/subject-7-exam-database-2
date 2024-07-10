export const ModalSectionComponent = (title, ...component) => {

  component = component !== undefined ? component.join("") : "";
  
  return `
    <div class="section">
      <div class="section-title">${title}</div>
      <div class="section-content">
        ${component}
      </div>
    </div>`
}