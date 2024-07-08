const salesList = document.getElementById("sales-list");
const purchasedList = document.getElementById("purchased-list");
const addr = `http://${window.location.host}/`;

const component = (obj) => {
  return `
    <div class="item" onclick='btnClick(${JSON.stringify(obj)})'>
      <img src="${addr}${obj.src}" alt="${obj.name}">
      <div class="price">${obj.name}<br>${obj["min_price"]}</div>
    </div>`;
}

const btnClick = (obj) => {
  console.dir(obj);
  // TODO: 모달창 뛰우기
}

export const AddObjIntoItemList = (items) => {

  window.btnClick = btnClick;

  const { arrPurchasedItem, arrSellItems } = items.reduce((acc, item) => {
    if (item.is_sell) {
      acc.arrSellItems.push(item);
    } else {
      acc.arrPurchasedItem.push(item);
    }
    return acc;
  }, { arrPurchasedItem: [], arrSellItems: [] });

  salesList.innerHTML = arrSellItems.map(item => component(item)).join("");
  purchasedList.innerHTML = arrPurchasedItem.map(item => component(item)).join("");
}