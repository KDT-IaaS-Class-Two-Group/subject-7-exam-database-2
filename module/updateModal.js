/**
 * 모달 창 내부의 정보를 업데이트 해주는 함수입니다.
 * @param {*} itemListData db에서 넘어온 원본의 데이터를 받습니다.
 */


export const updateModal = (itemListData)=>{
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

     
      sectionParagram[0].innerHTML =
      `이름 :  ${targetData.name}<br>
      무게 : ${targetData.weight || 0} lb<br>
      생성 날짜 : ${targetData.created_at}
      `
      sectionParagram[1].innerHTML = 
      `
      타입 : ${targetData.type}<br>
      정보 : ${targetData.info ? targetData.info : "검열된 데이터입니다."}<br>
      전도성 : ${targetData.conductive  ? targetData.conductive : "X"}<br>
      배터리 : ${targetData.battery ? targetData.battery :"X"}
      `
      sectionParagram[2].innerHTML = 
      `
      최소 가격 : ${targetData.min_price}$<br>
      최대 가격 : ${targetData.max_price ? targetData.max_price : "없음"}$
      `
        const buySellTitle = document.querySelector(".buy-sell > h3")
        buySellTitle.textContent = "buySell"
    })
  })
  

}