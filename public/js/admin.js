import { ListRequest } from "../../module/ListRequest.js";
import { assembly } from "../../module/Assembly.js";
const itemListData = await ListRequest()

assembly.column(itemListData,"span","dashBoard")
assembly.rowElement(itemListData, "span", "rowElement")
// assembly.rowElement(itemListData)
