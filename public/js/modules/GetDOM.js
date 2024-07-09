class MapDOM {

  constructor(){ 
    this.mapDOM = new Map(); 
    
    //* ID 속성을 포함한 Element를 불러온다.
    const elements = document.querySelectorAll('[id]');
    //* [id, element]로 저장.
    for(let elem of Array.from(elements)){
      this.mapDOM.set(elem.id, elem);
    }
  }

  /**
   * * 정적으로 id속성을 가진 Element를 가져온디
   */
  GetDOM(key){
    if(this.mapDOM.has(key)){
      return this.mapDOM.get(key)
    }
    else
      return null;
  }
}

export const mapDOM = new MapDOM();