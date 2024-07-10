import { KeyValueComponent } from "../Components/KeyValueComponent.js"
import { ModalComponent } from "../Components/ModalComponent.js"
import { ModalMainComponent } from "../Components/ModalMainComponent.js"
import { ModalImageContainerCompoennt } from "../Components/ModalImageContainerComponent.js"
import { ModalSectionComponent } from "../Components/ModalSectionComponent.js"
import { mapDOM } from "../modules/GetDOM.js"
import { ModalDoubleBtnComponent } from "../Components/ModalDoubleBtnComponent.js"
import { buyMainColor, sellMainColor } from "../static/css_color.js"

const addr = `http://${window.location.host}/`;
const modal_page = mapDOM.GetDOM("modal-page");

export const ListClickEvent = (obj) => {
  const minValueKey = obj.is_sell === 1 ? "최소가격" : "가격";
  const maxValueKey = obj.is_sell === 1 ? "최대가격" : "판매 가치"
  const maxValueVal = obj.is_sell === 1 ? obj["max_price"] : "0"
  
  const batteryVal = obj.battery === 1 ? "예" : "아니오";
  const conductiveVal = obj.conductive === 1 ? "예" : "아니오";

  const technicalKey = obj.is_sell === 1 ? "Save ID" : "효과"
  const technicalVal = obj.is_sell === 1 ? obj["item_id"] : obj["type"];

  const buttonText = obj.is_sell === 1 ? "Sell Now" : "Buy Now";

  const color = obj.is_sell ===1 ? sellMainColor : buyMainColor;

  const typeCp = KeyValueComponent("유형", obj["type"]);
  const infoCp = obj["info"] !== null ? KeyValueComponent("효과", obj["info"]) : "";

  const minValueCp = KeyValueComponent(minValueKey, obj["min_price"]);
  const maxValueCp = KeyValueComponent(maxValueKey, maxValueVal);

  const betteryCp = KeyValueComponent("배터리 유무", batteryVal);
  const weightCp = obj["weight"] !== null ? KeyValueComponent("무게", obj.weight) : "";
  const conductiveCp = KeyValueComponent("전도성", conductiveVal);

  const technicalCp = KeyValueComponent(technicalKey, technicalVal);

  const imgSc = ModalImageContainerCompoennt(addr+obj.src, obj.name);
  const infoSc = ModalSectionComponent("> INFORMATION", typeCp, infoCp);
  const charSc = ModalSectionComponent("> CHARACTERISTICSSECTION", betteryCp, weightCp, conductiveCp);
  const marketSc = ModalSectionComponent("> MARKETVALUESECTION", minValueCp, maxValueCp);
  const technicalSc = ModalSectionComponent("> TECHNICAL", technicalCp);

  modal_page.innerHTML = ModalComponent(`color:${color}`, ModalMainComponent(obj.name, `background-color:${color}`, imgSc, infoSc, charSc, marketSc, technicalSc), ModalDoubleBtnComponent("Add to cart", buttonText));
  modal_page.style.display = "flex";
}
