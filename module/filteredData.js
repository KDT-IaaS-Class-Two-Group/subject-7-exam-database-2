/**
 * 데이터베이스에서 넘어온 정보 속에 is_sell을 사용해서 팔 수 있는 아이템과 팔 수 없는 아이템을 선별하는 모듈입니다.
 * @param {*} data 원본 데이터를 받습니다
 * @returns 객체를 리턴하며, 객체 속에는 팔 수 있는 아이템의 정보와 팔 수 없는 아이템의 정보가 나뉘어 있습니다.
 */

export const filteredData = (data)=>{
  const sellItem = []
  const nonSellItem = []
  data.forEach((element)=>{
    if(element.is_sell){
      sellItem.push(element)
    }
    else{
      nonSellItem.push(element)
    }
  })

  return{sellItem,nonSellItem}
}