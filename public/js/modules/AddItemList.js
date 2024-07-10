import { ListClickEvent } from "../Controllers/ListClickEvent.js";
import { ListItemComponent } from "../Components/ListItemComponent.js"

const salesList = document.getElementById("sales-list");
const purchasedList = document.getElementById("purchased-list");

/**
 * * items 배열을 이용하여, 각 구매, 판매 리스트에 아이템을 넣어준다.
 * @param {*} items : 값
 */
export const AddObjIntoItemList = (items) => {

  //* 각 아이템 클릭에 대한 버튼 이벤트
  const btnClick = (obj) => {
    console.dir(obj);
    ListClickEvent(obj);
    // TODO: 모달창 뛰우기 이벤트 여기에 넣어 이용.
  }

  window.btnClick = btnClick;

  /**
   * * reduce를 이용하여 아이템 구매, 판매 배열을 나눈다.
   * * 초기값 객체 { arrPurchaedItem: [], arrSellItems: []}로 나눈다.
   * * is_sell 값에 따라, 각 배열에 push
   * * 디스트럭처링 할당을 통해 배열들을 가져온다.
   */
  const { arrPurchasedItem, arrSellItems } = items.reduce((acc, item) => {
    if (item.is_sell) {
      acc.arrSellItems.push(item);
    } else {
      acc.arrPurchasedItem.push(item);
    }
    return acc;
  }, { arrPurchasedItem: [], arrSellItems: [] });

  // TODO 정렬 ( 몇개 까지 )
  // !랜덤으로 섞어 그냥 10개를 넣을껀지. 아직 구매, 판매 이력이 없으므로 :)

  //* map을 통해 각 component의 배열을 만드고, join으로 합친다.
  salesList.innerHTML = arrSellItems.map(item => ListItemComponent(item)).join("");
  purchasedList.innerHTML = arrPurchasedItem.map(item => ListItemComponent(item)).join("");
}