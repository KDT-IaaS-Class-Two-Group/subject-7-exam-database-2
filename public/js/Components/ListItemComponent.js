const addr = `http://${window.location.host}/`;

/**
 * * obj 객체를 이용하여 component를 만든다.
 * @param {*} obj : 객체
 * @returns 
 */
export const ListItemComponent = (obj) => {
  return `
    <div class="item" onclick='btnClick(${JSON.stringify(obj)})'>
      <img src="${addr}${obj.src}" alt="${obj.name}">
      <div class="price">${obj.name}<br>${obj["min_price"]}</div>
    </div>`;
}

