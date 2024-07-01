export const reDirect = (url, loadTime)=>{

  const loadingBar = document.querySelector(".innerLoading")
  let condition = 0
  const maxCount = 100;
  let duration = loadTime/maxCount


  const animation = ()=>{
    if(condition < maxCount){
      
      // setTimeout(()=>{
          condition++
          loadingBar.style.width = `${condition}%`
          console.log(condition)
          setTimeout(animation,duration) 

        loadingBar.style.transition = `width ${duration}ms ease-out`;
    }else{
      window.location.href = url 
    }
  }
  animation() 
}