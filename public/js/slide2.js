import {ListRequest} from "../../module/ListRequest.js"
import { modalControl } from "../../module/modalControl.js";

const itemListData = await ListRequest();

modalControl()