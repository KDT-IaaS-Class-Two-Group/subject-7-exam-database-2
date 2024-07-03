import {ListRequest} from "../../module/ListRequest.js"
import { modalControl } from "../../module/modalControl.js";
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
      modalControl(data);
    }
    createItems(".sellList", itemListData)
   
      // 판매된 아이템 목록 생성
      createItems('.sellList', itemListData);

// 구매된 아이템 목록 생성 
createItems('.buyList', itemListData);