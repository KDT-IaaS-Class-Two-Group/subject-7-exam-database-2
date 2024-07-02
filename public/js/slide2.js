// JavaScript 파일: script.js



const modalControl = () => {
  
  document.addEventListener("DOMContentLoaded", () => {
    // 모달 요소 선택
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const modalTitle = document.getElementById("modal-title");
  
    document.querySelectorAll('.item').forEach(item => {

      item.addEventListener("click", (e) => {
        // 데이터 속성에서 제목과 설명 가져오기 (필요에 따라 데이터 추가 가능)
        const title = item.getAttribute('data-title') || '제목 없음';
  
        // 모달에 제목과 설명 설정
        modalTitle.textContent = title;
  
        modal.style.display = "block";
      });
    });
  
    // 닫기 버튼을 클릭하면 모달을 숨김
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // 모달 외부를 클릭하면 모달을 숨김
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });

}

modalControl()