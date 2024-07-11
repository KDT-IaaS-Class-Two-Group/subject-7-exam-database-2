export const KeyValueComponent = (key, value) => {
  return`
    <div class="key-value">
      <div class="label">${key}</div>
      <div class="value">${value}</div>
    </div>
  `
}