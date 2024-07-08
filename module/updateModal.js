/**
 * 모달 창 내부의 정보를 업데이트 해주는 함수입니다.
 * @param {*} itemListData db에서 넘어온 원본의 데이터를 받습니다.
 */

export const updateModal = (itemListData) => {
  const items = document.querySelectorAll('.item');
  
  items.forEach((element) => {
    element.addEventListener('click', () => {
      const elementId = element.getAttribute('data-item_id');
      const targetData = itemListData.find((data) => data.item_id == elementId);

      // 모달 내부 요소 가져오기
      const headTitle = document.querySelector('.modal-header > h2');
      headTitle.textContent = targetData.name;

      const modalImage = document.querySelector('.product-image > img');
      modalImage.src = targetData.src;

      const modalSections = document.querySelectorAll('.modal-section');
      const informationSection = modalSections[0];
      const characteristicsSection = modalSections[1];
      const marketValueSection = modalSections[2];
      const technicalSection = modalSections[3];

      // INFORMATION 섹션 업데이트
      informationSection.querySelectorAll('p')[0].innerHTML = `
        유형 | &nbsp; ${targetData.type}`;
        informationSection.querySelectorAll('p')[1].innerHTML = `
        효과 | &nbsp; ${targetData.info ? targetData.info : "검열된 데이터입니다."}
      `;

      // CHARACTERISTICS 섹션 업데이트
      characteristicsSection.querySelectorAll('p')[0].innerHTML = `
        무게 | &nbsp ${targetData.weight || 0} 파운드
      `;
      characteristicsSection.querySelectorAll('p')[1].innerHTML = `
        전도성 | &nbsp; ${targetData.conductive ? targetData.conductive : "X"}
      `;
      characteristicsSection.querySelectorAll('p')[2].innerHTML = `
        두손으로 | &nbsp; ${targetData.battery ? targetData.battery : "X"}
      `;

      // MARKET VALUE 섹션 업데이트
      marketValueSection.querySelectorAll('p')[0].innerHTML = `
        최소값 | &nbsp; ${targetData.min_price}$
      `;
      marketValueSection.querySelectorAll('p')[1].innerHTML = `
        최대값 | &nbsp; ${targetData.max_price ? targetData.max_price : "없음"}$
      `;

      // TECHNICAL 섹션 업데이트
      technicalSection.querySelector('p').innerHTML = `
        ID 저장 | &nbsp; ${targetData.item_id}
      `;

      // const buySellTitle = document.querySelector('.buy-sell > h3');
      // buySellTitle.textContent = "구매 및 판매";
    });
  });
};
