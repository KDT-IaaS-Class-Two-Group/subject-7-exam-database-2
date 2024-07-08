export class Modal {
  constructor(config) {
    this.id = config.id;
    this.classes = config.class;
    this.contentParameter = config.contentParameter;
    this.createModal();
    this.attachEventListener();
  }

  appendChildren(parent, children) {
    children.forEach(child => parent.appendChild(child));
  }

  createModal() {
    this.modal = document.createElement('div');
    this.modal.id = this.id;

    this.modalContent = document.createElement('div');
    this.modalContent.className = this.classes[0];

    this.closeButton = document.createElement('span');
    this.closeButton.className = this.classes[1];
    this.closeButton.innerHTML = '&times;';

    this.modalHeader = document.createElement('div');
    this.modalHeader.className = this.classes[2];
    const headerTitle = document.createElement('h2');
    headerTitle.textContent = '에 어 혼';  // 헤더 제목
    this.modalHeader.appendChild(headerTitle);

    this.productImage = document.createElement('div');
    this.productImage.className = this.classes[4];
    const productImg = document.createElement('img');
    productImg.className = this.classes[3];
    productImg.src = 'path_to_image';  // 실제 이미지 경로로 수정
    productImg.alt = 'Product Image';
    this.productImage.appendChild(productImg);

    this.modalBody = document.createElement('div');
    this.modalBody.className = this.classes[5];

    const sections = ['INFORMATION', 'CHARACTERISTICS', 'MARKET VALUE', 'TECHNICAL'];
    sections.forEach((sectionTitle, index) => {
      const section = document.createElement('div');
      section.className = this.classes[6];

      const sectionHeader = document.createElement('h2');
      sectionHeader.textContent = `> ${sectionTitle}`;
      section.appendChild(sectionHeader);

      const contentDiv = document.createElement('div');
      contentDiv.className = this.classes[9 + index];  // INFORMATION, CHARACTERISTICS 등 클래스 할당

      // 각 섹션에 대한 내용 추가
      if (sectionTitle === 'INFORMATION') {
        contentDiv.innerHTML = `
        <div>
          <p></p>
          <p></p>
        </div>
        `;
      } else if (sectionTitle === 'CHARACTERISTICS') {
        contentDiv.innerHTML = `
        <div>
          <p></p>
          <p></p>
          <p></p>
        </div>
        `;
      } else if (sectionTitle === 'MARKET VALUE') {
        contentDiv.innerHTML = `
        <div>
          <p></p>
          <p></p>
        </div>
        `;
      } else if (sectionTitle === 'TECHNICAL') {
        contentDiv.innerHTML = `
        <div>
          <p></p>
        </div>
        `;
      }

      section.appendChild(contentDiv);
      this.modalBody.appendChild(section);
    });

    this.buySell = document.createElement('div');
    this.buySell.className = this.classes[7];


    const div = document.createElement("div")
    this.buySell.appendChild(div)

    const buySellBtn = []
    for(let i = 0; i < 2; i++){
      const btn = document.createElement("button")
      div.appendChild(btn)
      btn.setAttribute("type","button")
      buySellBtn.push(btn)
    }
    buySellBtn[0].textContent = "Add to cart"
    buySellBtn[0].className = 'add-to-cart';
    buySellBtn[1].textContent = "Buy Now"
    buySellBtn[1].className = 'buy-now';

    const children = [
      this.closeButton,
      this.modalHeader,
      this.productImage,
      this.modalBody,
      this.buySell
    ];

    this.appendChildren(this.modalContent, children);
    this.modal.appendChild(this.modalContent);
    document.body.appendChild(this.modal);
  }

  openModal() {
    this.modal.style.display = 'block';
  }

  closeModal() {
    this.modal.style.display = 'none';
  }

  attachEventListener() {
    this.closeButton.addEventListener('click', () => { this.closeModal() });

    this.modal.addEventListener('click', (event) => {
      if (event.target === this.modal) { this.closeModal() }
    });

    document.querySelectorAll('.item').forEach((element) => {
      element.addEventListener("click", () => {
        this.openModal()
      });
    });

    document.querySelector('.add-to-cart').addEventListener('click', () => {
      console.log('Add to cart clicked');
    });
    document.querySelector('.buy-now').addEventListener('click', () => {
      console.log('Buy Now clicked');
    });
  }
}
