
$(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
       $('#header').addClass('header-active');
    } else {
       $('#header').removeClass('header-active');
    }
});   

   
AOS.init({
  duration: 800,
    offset:50,
  once: true,
})



$(document).ready(function(){
	
function isInView(el) {
  var box = el.getBoundingClientRect();
  return box.top < window.innerHeight && box.bottom >= 0;
}

window.addEventListener("scroll", function() {
  var footer = document.getElementById("footer");
  var visible = isInView(footer);
    if(visible) {
      footer.classList.add("footer_active");
    } else {
      footer.classList.remove("footer_active");
    }
});	
    
 
});