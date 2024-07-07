// import { modalConfig } from "./modalConfig.js";

export class Modal {
  constructor(config) {
    // 설정값 저장
    this.id = config.id;
    this.classes = config.class;
    this.contentParameter = config.contentParameter;

    // 모달 생성
    this.createModal();
    this.attachEventListener()
  }

  // 요소들을 모달 콘텐츠에 추가하는 헬퍼 함수
  appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
  }

  // 모달 요소 생성
  createModal() {
    // 모달 배경 생성 (id: modal)
    this.modal = document.createElement('div');
    this.modal.id = this.id;

    // 모달 콘텐츠 (class: modal-content)
    this.modalContent = document.createElement('div');
    this.modalContent.className = this.classes[0];

    // 닫기 버튼 (class: close-button)
    this.closeButton = document.createElement('span');
    this.closeButton.className = this.classes[1];
    this.closeButton.innerHTML = '&times;';


    // 모달 헤더 (class: modal-header)
    this.modalHeader = document.createElement('div');
    this.modalHeader.className = this.classes[2];
    const headerTitle = document.createElement('h2');
    this.modalHeader.appendChild(headerTitle);

    // 제품 이미지 섹션 (class: product-image)
    this.productImage = document.createElement('div');
    this.productImage.className = this.classes[4];
    const productImg = document.createElement('img');
    productImg.className = this.classes[3];
    productImg.src = '';
    productImg.alt = 'Product Image';
    this.productImage.appendChild(productImg);

    // 모달 본문 (class: modal-body)
    this.modalBody = document.createElement('div');
    this.modalBody.className = this.classes[5];

    // 모달 섹션들 (class: modal-section)
    for (let i = 0; i < this.contentParameter; i++) {
      const section = document.createElement('div');
      section.className = this.classes[6];
      const sectionTitle = document.createElement('h3');

      section.appendChild(sectionTitle);
      const paragraph = document.createElement('p');
      section.appendChild(paragraph);
      this.modalBody.appendChild(section);
    }

    // 구매 및 판매 섹션 (class: buy-sell)
    this.buySell = document.createElement('div');
    this.buySell.className = this.classes[7];
    const buySellTitle = document.createElement('h3');
    this.buySell.appendChild(buySellTitle);

    // 요소들을 모아 배열로 관리
    const children = [
      this.closeButton,
      this.modalHeader,
      this.productImage,
      this.modalBody,
      this.buySell
    ];
    

    // 모달 콘텐츠에 요소들을 추가
    this.appendChildren(this.modalContent, children);

    // 모달 배경에 모달 콘텐츠 추가
    this.modal.appendChild(this.modalContent);

    // 모달을 문서에 추가
    document.body.appendChild(this.modal);
  }

  // 모달 열기
  openModal() {
    this.modal.style.display = 'block';
  }

  // 모달 닫기
  closeModal() {
    this.modal.style.display = 'none';
  }
  attachEventListener(){
      // 닫기 버튼 클릭 이벤트
      this.closeButton.addEventListener('click', () => {this.closeModal()});

      this.modal.addEventListener('click', (event)=>{
        if(event.target === this.modal){ this.closeModal() }
      })
      document.querySelectorAll('.item').forEach((element) => {
        // element.onclick = ()=>{console.log(1)}
        element.addEventListener("click", ()=>{
          this.openModal()}
      )
    })
  }
}


// 모달 생성 및 사용
// export const modalInstance = new Modal(modalConfig);
// modalInstance.openModal(); // 모달 열기