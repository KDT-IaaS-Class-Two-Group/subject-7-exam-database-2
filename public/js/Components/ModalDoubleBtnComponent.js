import { modal } from "../Controllers/modal.js";
import { Request } from "../modules/Request.js";
import { SERVER_URL } from "../static/env.js";

window.DataToServer = DataToServer;
window.AddToCartEvent = AddToCartEvent;


export const ModalDoubleBtnComponent = (firstText, secondText, obj) => {
  return `
    <div class="modal-double-button">
      <div onclick='AddToCartEvent(${JSON.stringify(obj)})'>${firstText}</div>
      <div onclick='DataToServer(${JSON.stringify(obj)})'>${secondText}</div>
    </div>
   ` 
}

function AddToCartEvent(obj){
  console.dir(obj);
  modal.DisplayOff();
}

function DataToServer(obj){
  Request(SERVER_URL + "/list", obj);
  modal.DisplayOff();
}