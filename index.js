window.addEventListener('DOMContentLoaded',function(){

  let mySwiper = this.document.querySelector('.mySwiper')
  var swiper = new Swiper(mySwiper, {
    // observer: true,
    // observeParents: true,
    // variableWidth: true,
    slidesPerView: "8",
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
  scrollTopCheck();
  changeTab();
})

  // 탭 누를시 클릭한요소에 active클래스를 추가해줌
  function changeTab () {
    const tab = document.querySelectorAll('.tab');
    tab.forEach((ele) => {
      ele.addEventListener('click',function(){
        tabActiveInit();
        ele.classList.add('active');
      })
    })
  }
  // 탭에 설정된 active클래스를 전부 지워줌
  function tabActiveInit () {
    const tab = document.querySelectorAll('.tab');
    tab.forEach((ele) => {
      ele.classList.remove('active')
    })
  }

  function scrollTopCheck () {
    window.addEventListener('scroll',function(){
      let windowH = window.scrollY;
      const tg = this.document.querySelector('.component.-compare');

      if(windowH > 0){  
        tg.classList.add('active')
      } else {
        tg.classList.remove('active')
      }
    })
  }