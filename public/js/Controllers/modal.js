import { mapDOM } from "../modules/GetDOM.js";

class Modal {

  constructor(elem){
    this.elem = elem;
    this.elem.addEventListener("click", (evnet) => {
      if(evnet.target === this.elem)
        this.DisplayOff();
    })
  }

  DisplayOn(){
    this.elem.style.display = "flex";
  }

  DisplayOff(){
    this.elem.style.display = "none";
  }

  Update(innerHTML){
    this.elem.innerHTML = innerHTML;
  }
}

export const modal = new Modal(mapDOM.GetDOM("modal-page"));