$(document).ready(function () {

var swiper = new Swiper(".swiper-tech", {
  slidesPerView: 1,
  spaceBetween: 15,
    mousewheel: false,
    speed:1200,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
 // loop: true,
 // autoplay:false,

  autoplay: {
    delay: 1000,
    disableOnInteraction: false
  },


  breakpoints: {
    0: {
      slidesPerView: 1.2,
          
        
    },
    578: {
      slidesPerView: 3,
          
      
    },
     
      992: {
      slidesPerView: 4,
         
      
    },
      
     
  }
});  
    

var swiper = new Swiper(".swiper-placement", {
  slidesPerView: 1,
  spaceBetween: 15,
    mousewheel: false,
    speed:1200,
  centeredSlides: false,
  freeMode: false,
  grabCursor: true,
 // loop: true,
 autoplay:false,

//  autoplay: {
//    delay: 1000,
//    disableOnInteraction: false
//  },
// If we need pagination
   pagination: {
      el: ".swiper-pagination",
        clickable: true,
    },

  // Navigation arrows
  navigation: {
    nextEl: '.sbtn-pmt .swiper-button-next',
    prevEl: '.sbtn-pmt .swiper-button-prev',
  },

  breakpoints: {
    0: {
      slidesPerView: 1.1,
          
        
    },
    576: {
      slidesPerView: 2,
          
      
    },
     
      992: {
      slidesPerView: 3,
         
      
    },
       
     
  }
});  
    
    });