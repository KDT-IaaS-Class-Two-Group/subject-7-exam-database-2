//* 가로 스크롤, 세로 스크롤로 변경
export const ScrollConverter = (event) => {
  if (event.deltaY != 0) {
    event.currentTarget.scrollLeft += event.deltaY;
    event.preventDefault();
  }
}