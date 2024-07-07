import{ dataSet }from"./dataSet.js"

/**
 * 매개변수로 들어온 배열의 길이값 만큼 parent 변수에 div를 추가해주는 함수입니다.
 * @param {*} data 배열로 된 데이터입니다.
 * @param {*} parent 부모 요소가 되는 div 컨테이너
 */
export const makeitemDiv = (data, parent)=>{

  data.forEach(item => {
    
    const divElement = document.createElement('div');
    divElement.setAttribute("class","item")
    
    
    const itemImg = document.createElement('img');

    itemImg.setAttribute("class",'itemImg');
    itemImg.src = item.src
    itemImg.alt = "noImg"
    
    const itemDetail = document.createElement('div');
    itemDetail.setAttribute("class","itemDetail");
    
    const itemName = document.createElement('h4');
    itemName.textContent = `이름 : ${item.name}`;
    
    const itemPrice = document.createElement('p');
    itemPrice.textContent = `가격 : ${item.min_price}`;
    
    // 구조 조립
    itemDetail.appendChild(itemName);
    itemDetail.appendChild(itemPrice);
    divElement.appendChild(itemImg);
    divElement.appendChild(itemDetail);
    
    // 부모 요소에 추가
    parent.appendChild(divElement);

    dataSet(divElement, item)

  });
}