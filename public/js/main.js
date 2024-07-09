import {ListRequest} from "../../module/ListRequest.js"
import { AddObjIntoItemList } from "./modules/AddItemList.js";

const itemListData = await ListRequest();
AddObjIntoItemList(itemListData);