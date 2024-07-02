// JavaScript 파일: script.js

// 문서가 로드된 후 실행
document.addEventListener("DOMContentLoaded", () => {
  // 모달 요소 선택
  const modal = document.getElementById("modal");
  const closeButton = document.querySelector(".close-button");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");

  // 각 아이템 클릭 시 모달을 표시
  document.querySelectorAll('.item').forEach(item => {
    item.addEventListener("click", (event) => {
      // 데이터 속성에서 제목과 설명 가져오기 (필요에 따라 데이터 추가 가능)
      const title = item.getAttribute('data-title') || '제목 없음';
      const description = `You clicked on item ${item.textContent.trim()}`; // 임시 설명

      // 모달에 제목과 설명 설정
      modalTitle.textContent = title;
      modalDescription.textContent = description;

      // 모달 표시
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
