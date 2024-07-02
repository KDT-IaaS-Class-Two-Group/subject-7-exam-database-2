
import { modalControl } from "../../module/modalControl.js";
import ListRequest from "../../module/ListRequest"

const itemListData = async () => {
  return await ListRequest();
}

modalControl()
