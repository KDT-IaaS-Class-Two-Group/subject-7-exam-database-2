/**
 * 모달 창을 제어하는 모듈입니다. 정적으로 작성되어 있는 모달 창의 id를 가져와서 활용합니다.
 * @param {*} itemListData DB에서 넘어온 데이터
 */

export const modalControl = (itemListData) => {
  //#region 
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalImage = document.getElementById("modal-image");
  const modalType = document.getElementById("modal-type");
  const modalInfo = document.getElementById("modal-info");
  const modalWeight = document.getElementById("modal-weight");
  const modalMinPrice = document.getElementById("modal-min-price");
  const modalMaxPrice = document.getElementById("modal-max-price");
//#endregion


document.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", (e) => {
      const itemId = item.getAttribute("data-item_id");
      const itemData = itemListData.find((data) => { // 태그에 속성으로 들어가있는 data-item_id 의 값이 itemId 가 데이터베이스에서 넘어온 객체의 item_id 값과 같다면 해당 요소를 반환합니다.
        if (data.item_id == itemId) {
          return data;
        }
      });

      if (itemData) {
        modalTitle.textContent = itemData.name;
        modalType.textContent = `타입 : ${itemData.type}`;
        modalInfo.textContent = `정보 : ${itemData.info}`;
        modalWeight.textContent = `무게 : ${itemData.weight} lb`;
        modalMinPrice.textContent = `최소 가격 : ${itemData.min_price}$`;
        modalMaxPrice.textContent = `최대 가격 : ${itemData.max_price}$`;

        // todo 이미지 설정 : 추후 DB에서 넘어올 이미지 링크로 대체
        modalImage.src = item.getAttribute("data-image");

        modal.style.display = "block";
      }
    });
  });

  // 모달 닫기 버튼 클릭 시 모달 닫기
  document.querySelector(".close-button").addEventListener("click", () => {
    modal.style.display = "none";
  });

  // 모달 영역 바깥 클릭 시 모달 닫기
  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
