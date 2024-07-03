import {ListRequest} from "../../module/ListRequest.js"
// import { modalControl } from "../../module/modalControl.js";
const itemListData = await ListRequest();



// JSON 배열을 받아서 최대 10개의 아이템을 생성하고 DOM에 추가하는 함수

function createItems(containerSelector, data) {
    const container = document.querySelector(containerSelector);

    let idIndex = Object.keys(data[0])
    console.log(idIndex)

    // 최대 10개만 생성
    // todo solditemTable 에 존재하는 quantity값을 이용해서 많이 팔린 항목에 대한 식별


    const itemsToCreate = data.filter((element)=>{return element["is_sell"]});

    console.log(itemsToCreate)
   

/**
 * DOM 요소에 데이터베이스에서 넘어온 객체의 key 값을 바탕으로 dataSet을 설정합니다.
 * @param {*} ele 
 * @param {*} objKey 
 * @param {*} data 
 */

const dataSet = (ele, objKey,data)=>{
  objKey.forEach((element)=>{
    ele.setAttribute(`data-${element}`, data[element]);
  })
}

itemsToCreate.forEach(item => {
  // 아이템 요소 생성
  const itemElement = document.createElement('div');
  itemElement.classList.add('item');
  
  dataSet(itemElement,idIndex,item)

        // itemElement.setAttribute('data_item_id', item.item_id);
        // itemElement.setAttribute('data_name', item.name);
        // itemElement.setAttribute('data_type', item.type);
        // itemElement.setAttribute('data_info', item.info);
        // itemElement.setAttribute('data_weight', item.weight);
        // itemElement.setAttribute('data_conductive', item.conductive);
        // itemElement.setAttribute('data_is_sell', item.is_sell ? "Yes" : "No");
        // itemElement.setAttribute('data_min_price', item.min_price);
        // itemElement.setAttribute('data_max_price', item.max_price);

        const itemImg = document.createElement('div');
        itemImg.setAttribute("class", 'itemImg');

        const itemDetail = document.createElement('div');
        itemDetail.classList.add('itemDetail');

        const itemName = document.createElement('h4');
        itemName.textContent = `이름 : ${item.name}`;

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `가격 : ${item.min_price}`;

        // 구조 조립
        itemDetail.appendChild(itemName);
        itemDetail.appendChild(itemPrice);

        itemElement.appendChild(itemImg);
        itemElement.appendChild(itemDetail);

        // 컨테이너에 추가
        container.appendChild(itemElement);
    });

    // 각 아이템 클릭 이벤트 할당
    modalClickEvent(data);
}
createItems(".sellList", itemListData)
// // 각 아이템 클릭 시 모달을 표시하고 데이터를 채우는 함수
function modalClickEvent(itemListData) {

    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalImage = document.getElementById("modal-image");
    const modalType = document.getElementById("modal-type")
    const modalInfo = document.getElementById("modal-info")
    const modalWeight = document.getElementById("modal-weight")
    const modalMinPrice = document.getElementById("modal-min-price")
    const modalMaxPrice = document.getElementById("modal-max-price")

    document.querySelectorAll('.item').forEach((item) => {
        item.addEventListener("click", (e) => {
            const itemId = item.getAttribute('data-item_id'); 
            const itemData = itemListData.find((data) => { // itemId 가 데이터베이스에서 넘어온 객체의 item_id 값과 같다면 해당 요소를 반환합니다.
              if(data.item_id == itemId){
                return data}
              });

            if (itemData) {
                modalTitle.textContent = itemData.name;
                modalType.textContent = `타입 : ${itemData.type}`;
                modalInfo.textContent = `정보 : ${itemData.info}`;
                modalWeight.textContent = `무게 : ${itemData.weight} lb`;
                modalMinPrice.textContent = `최소 가격 : ${itemData.min_price}$`;
                modalMaxPrice.textContent = `최대 가격 : ${itemData.max_price}$`;

                // todo 이미지 설정 : 추후 DB에서 넘어올 이미지 링크로 대체
                modalImage.src = item.getAttribute('data-image')

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
}

// 판매된 아이템 목록 생성
createItems('.sellList', itemListData);

// 구매된 아이템 목록 생성 
createItems('.buyList', itemListData);
    

      // // JSON 배열을 받아서 최대 10개의 아이템을 생성하고 DOM에 추가하는 함수
      // function createItems(containerSelector, data) {
      //   const container = document.querySelector(containerSelector);

      //   // 최대 10개만 생성
      //   const itemsToCreate = data.slice(0, 10);

      //   itemsToCreate.forEach(item => {
      //     // 아이템 요소 생성
      //     const itemElement = document.createElement('div');
      //     itemElement.classList.add('item');

      //     const itemImg = document.createElement('div');
      //     itemImg.classList.add('itemImg');
      //     itemImg.textContent = '이건 이미지야';

      //     const itemDetail = document.createElement('div');
      //     itemDetail.classList.add('itemDetail');

      //     const itemName = document.createElement('h4');
      //     itemName.textContent = `${item.name}`;

      //     const itemPrice = document.createElement('p');
      //     itemPrice.textContent = `가격 : ${item.max_price}`;

      //     // 구조 조립
      //     itemDetail.appendChild(itemName);
      //     itemDetail.appendChild(itemPrice);

      //     itemElement.appendChild(itemImg);
      //     itemElement.appendChild(itemDetail);

      //     // 컨테이너에 추가
      //     container.appendChild(itemElement);
      //   });
      // }

      // // 판매된 아이템 목록 생성
      // createItems('.sellList', itemListData);

      // // 구매된 아이템 목록 생성 (여기서는 예시로 같은 데이터를 사용하지만, 실제로는 다른 데이터가 될 수 있음)
      // createItems('.buyList', itemListData);



// function dataSet(itemListData){
//   if(condition < 12){
//     condition++
//     let sellItem = document.querySelector('.sellitem')
//     console.log(sellItem)
//     const wtf = document.createElement('div')
//     wtf.setAttribute("class", "item")
//     sellItem.appendChild(wtf)
//     let finder = document.querySelectorAll('.sellitem > .item')
//     finder.forEach((ele)=>{
//       ele.textContent = JSON.stringify(itemListData[condition].name)})
//     dataSet()
//   }
// }

// dataSet(itemListData)















// const modalControl = ()=>{
//   ;//JavaScript 파일: slide2.js
  
//     // 모달 관련 요소 선택
//     //#region 
//     const modal = document.getElementById("modal");
//     const closeButton = document.querySelector(".close-button");
//     const modalTitle = document.getElementById("modal-title");
//     const modalImage = document.getElementById("modal-image");
  
//     // 각 항목의 데이터를 채울 요소 선택
//     const modalType = document.getElementById("modal-type")
//     const modalInfo = document.getElementById("modal-effects")
//     const modalWeight = document.getElementById("modal-weight")
//     const modalConductive = document.getElementById("modal-conductive")
//     const modalTwoHanded = document.getElementById("modal-two-handed")
//     const modalMinPrice = document.getElementById("modal-min-value")
//     const modalMaxPrice = document.getElementById("modal-max-value")
//   //#endregion
//     // 각 아이템 클릭 시 모달을 표시하고 데이터 채우기
//     document.querySelectorAll('.item').forEach(item => {
//       item.addEventListener("click", () => {
//         // 데이터 설정 - 실제 데이터에 맞게 수정 필요
//         modalTitle.textContent = item.getAttribute('data-title') || 'NULL';
//         modalType.textContent = item.getAttribute('data-type') || 'N/A';
//         modalInfo.textContent = item.getAttribute('data-effects') || 'N/A';
//         modalWeight.textContent = item.getAttribute('data-weight') || 'N/A';
//         modalConductive.textContent = item.getAttribute('data-conductive') || 'N/A';
//         modalTwoHanded.textContent = item.getAttribute('data-two-handed') || 'N/A';
//         modalMinPrice.textContent = item.getAttribute('data-min-value') || 'N/A';
//         modalMaxPrice.textContent = item.getAttribute('data-max-value') || 'N/A';
  
//         // 이미지 설정 - 이미지가 없으면 기본 이미지 사용
//         modalImage.src = item.getAttribute('data-image') || '../resource/default-item.png';
  
//         // 모달 표시
//         modal.style.display = "block";
//       });
//     });
  
//     // 모달 닫기 버튼 클릭 시 모달 닫기
//     closeButton.addEventListener("click", () => {
//       modal.style.display = "none";
//     });
  
//     // 모달 영역 바깥 클릭 시 모달 닫기
//     window.addEventListener("click", (event) => {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     });

// } 



// modalControl(itemListData)