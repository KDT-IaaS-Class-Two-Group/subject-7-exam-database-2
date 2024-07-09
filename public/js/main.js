import {ListRequest} from "../../module/ListRequest.js"
import { AdjustScrollConverter } from "./Controllers/AdjustScrollConverter.js";
import { AddObjIntoItemList } from "./modules/AddItemList.js";

const itemListData = await ListRequest();
AddObjIntoItemList(itemListData);
AdjustScrollConverter();