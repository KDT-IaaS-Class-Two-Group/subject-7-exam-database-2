//* 가로 스크롤, 세로 스크롤로 변경
export const ScrollConverter = (event) => {
  if (event.deltaY != 0) {
    event.currentTarget.scrollLeft += event.deltaY;
    //* 기존 스크롤 동작방지
    event.preventDefault();
  }
}