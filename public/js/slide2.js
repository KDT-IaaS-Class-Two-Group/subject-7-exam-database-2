import {ListRequest} from "../../module/ListRequest.js"
// import { modalControl } from "../../module/modalControl.js";
import { Modal } from "../../module/modalInstance.js";
import { modalConfig } from "../../module/modalConfig.js";


// modalInstance.openModal()
const itemListData = await ListRequest();
console.log(itemListData)

  // modalInstance.attachEventListener()


function createItems(containerSelector, data) {
    const container = document.querySelector(containerSelector);

    let idIndex = Object.keys(data[0])
    console.log(idIndex)

    // 최대 10개만 생성
    // todo solditemTable 에 존재하는 quantity값을 이용해서 많이 팔린 항목에 대한 식별


    const itemsToCreate = data.filter((element)=>{return element["is_sell"]});

   

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
  itemElement.classList.add("item")
  
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
        itemImg.classList.add('itemImg');

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
    }

  createItems(".sellList", itemListData)
  createItems('.buyList', itemListData);



new Modal(modalConfig)

const updateModal = (itemListData)=>{
  const item = document.querySelectorAll(".item")
  item.forEach((element)=>{
    element.addEventListener("click",()=>{
      const elementId = element.getAttribute("data-item_id")
      const targetData = itemListData.find((data)=>{return data.item_id == elementId})

      //모달 내부 요소 가져오기
      const headTitle = document.querySelector(".modal-header > h2")
      headTitle.textContent = targetData.name

      const modalImage = document.querySelector(".modal-image")
      modalImage.src = targetData.src

      const modalSection = document.querySelectorAll(".modal-section > h3")
      modalSection[0].textContent = "information"
      modalSection[1].textContent = "discription"
      modalSection[2].textContent = "Price"
      
      const sectionParagram = document.querySelectorAll(`.modal-section > p`)
      console.log(sectionParagram)

      const buySellTitle = document.querySelector(".buy-sell > h3")
      buySellTitle.textContent = "buySell"
      
      const buySell = document.querySelector(".buy-sell")
      const div = document.createElement("div")
      buySell.appendChild(div)
      for(let i = 0; i < 2; i++){
        const btn = document.createElement("button")
        div.appendChild(btn)
        btn.setAttribute("type","button")
      }
      const buySellBtn = document.querySelectorAll(".buy-sell > div > button")
      buySellBtn[0].textContent = "buy"
      buySellBtn[1].textContent = "sell"
    })
  })


}

updateModal(itemListData)
  // console.log(modalInstance)
  // console.dir(document.querySelector(".item"))
  // modalInstance.attachEventListener()