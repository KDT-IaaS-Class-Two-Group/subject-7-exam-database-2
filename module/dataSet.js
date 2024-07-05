/**
 * for in 문을 이용해 객체 속의 value를 DOM 요소에 data로 세팅해주는 함수입니다.
 * @param {*} target data 속성을 받을 DOM 요소입니다
 * @param {*} data 객체 타입의 데이터입니다.
 */

export const dataSet = (target, data)=>{
  for(let key in data){
    target.setAttribute(`data-${key}`, data[key])
  }
}

// const data =[
//   {},
//   {},
//   {},
// ]
// const itemsToCreate = data.filter((element)=>{return element["is_sell"]});

// itemsToCreate.forEach((item) => {

// const itemElement = document.createElement('div');
// itemElement.classList.add("item")

// dataSet(itemElement,item)})