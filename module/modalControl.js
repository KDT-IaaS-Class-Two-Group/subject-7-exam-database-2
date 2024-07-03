export const modalControl = ()=>{

  /**
   * ! issue 60 번 완료 되면 추가 작업 진행하겠음
   */
  ;//JavaScript 파일: slide2.js
  
  document.addEventListener("DOMContentLoaded", () => {
    // 모달 관련 요소 선택
    const modal = document.getElementById("modal");
    const closeButton = document.querySelector(".close-button");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
  
    // 각 항목의 데이터를 채울 요소 선택
    const modalType = document.getElementById("modal-type").querySelector('span');
    const modalEffects = document.getElementById("modal-effects").querySelector('span');
    const modalWeight = document.getElementById("modal-weight").querySelector('span');
    const modalConductive = document.getElementById("modal-conductive").querySelector('span');
    const modalTwoHanded = document.getElementById("modal-two-handed").querySelector('span');
    const modalMinValue = document.getElementById("modal-min-value").querySelector('span');
    const modalMaxValue = document.getElementById("modal-max-value").querySelector('span');
  
    // 각 아이템 클릭 시 모달을 표시하고 데이터 채우기
    document.querySelectorAll('.item').forEach(item => {
      item.addEventListener("click", () => {
        // 데이터 설정 - 실제 데이터에 맞게 수정 필요
        modalTitle.textContent = item.getAttribute('data-title') || 'NULL';
        modalType.textContent = item.getAttribute('data-type') || 'N/A';
        modalEffects.textContent = item.getAttribute('data-effects') || 'N/A';
        modalWeight.textContent = item.getAttribute('data-weight') || 'N/A';
        modalConductive.textContent = item.getAttribute('data-conductive') || 'N/A';
        modalTwoHanded.textContent = item.getAttribute('data-two-handed') || 'N/A';
        modalMinValue.textContent = item.getAttribute('data-min-value') || 'N/A';
        modalMaxValue.textContent = item.getAttribute('data-max-value') || 'N/A';
  
        // 이미지 설정 - 이미지가 없으면 기본 이미지 사용
        modalImage.src = item.getAttribute('data-image') || '../resource/default-item.png';
  
        // 모달 표시
        modal.style.display = "block";
      });
    });
  
    // 모달 닫기 버튼 클릭 시 모달 닫기
    closeButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    // 모달 영역 바깥 클릭 시 모달 닫기
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });

} 
