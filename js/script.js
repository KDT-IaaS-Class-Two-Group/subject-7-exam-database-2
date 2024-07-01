
const reDirect = (url, loadTime)=>{

  const loadingBar = document.querySelector(".innerLoading")
  let condition = 0
  const maxCount = 100;
  let duration = loadTime/maxCount


  const animation = ()=>{
    if(condition < maxCount){
      
      // setTimeout(()=>{
          // todo 이 안에 로딩바를 움직일 뭔가가 들어가야 함
          // ? 재귀도 찍어야 하는데?
          // todo 매개변수로 들어온 밀리 초를 이용해서 로딩 바의 너비가 늘어나야 함.
          condition++
          loadingBar.style.width = `${condition}%`
          console.log(condition)
          setTimeout(animation,duration) // ! 너무 빨리 넘어감

        loadingBar.style.transition = `width ${duration}ms ease-out`;/* transition: width 0.1s ease-out; */
    }else{
      window.location.href = url // ? something 매개변수는 리다이렉트를 걸 html 링크로 할 예정 
      // * else로 빠지면 바로 쏴버리게
    }
  }
  animation() // ! loadTime 만큼 시간이 지나고 움직임
}


document.addEventListener("DOMContentLoaded", ()=>{
  reDirect("slide2.html",5000)
})