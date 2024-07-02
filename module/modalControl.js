
export const modalControl = () => {
  
  document.addEventListener("DOMContentLoaded", () => {

    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const modalTitle = document.getElementById("modal-title");
  
    document.querySelectorAll('.item').forEach(item => {

      item.addEventListener("click", (e) => {
        const itemText = item.innerHTML
        modalTitle.textContent = itemText;
        modal.style.display = "block";
      });
    });
  
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

}