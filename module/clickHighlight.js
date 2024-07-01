/**
 * 클릭 이벤트를 담당하는 함수입니다. 이 함수는 root에 이벤트핸들러를 부여해서 이벤트 위임을 담당합니다.
 * @param {*} selectColer : 선택된 요소의 배경색
 * @param {*} baseColor : 원래대로 돌릴 배경석
 */

export const clickHighlight = (selectColer, baseColor) => {

  let isSelected;

root.addEventListener(`click`, function(e){ 
  if(e.target !== root){
    if(isSelected){
      isSelected.style.backgroundColor = "#f0f0f0"
      e.target.style.backgroundColor = "red"
      isSelected = e.target
    }else{
      e.target.style.backgroundColor = "red"
      isSelected = e.target
    };
  }else{
    isSelected.style.backgroundColor = "#f0f0f0"
  }
})

}
//*==============================
