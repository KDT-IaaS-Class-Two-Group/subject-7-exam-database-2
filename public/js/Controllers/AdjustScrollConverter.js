import { mapDOM } from "../modules/GetDOM.js";
import { ScrollConverter } from "../modules/ScrollConverter.js";

export const AdjustScrollConverter = () => {
  const salesList = mapDOM.GetDOM("sales-list");
  const purchasedList = mapDOM.GetDOM("purchased-list");

  salesList.addEventListener('wheel', ScrollConverter);
  purchasedList.addEventListener('wheel', ScrollConverter);
}