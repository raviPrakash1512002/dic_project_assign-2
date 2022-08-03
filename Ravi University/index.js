
// clicking on enroll then show from

function div_show() {
  document.getElementById("wrapper").style.display = "block";
  document.getElementsByTagName("body")[0].style.overflow="hidden";
}

var img = $(".img");

img.click(function () {
  document.getElementById("wrapper").style.display = "none";
  document.getElementsByTagName("body")[0].style.overflow="scroll";
});
  // Show subject accroding to course choose
$(document).ready(function () {
  $("input[name=course]").on("change", function () {
    var n = $(this).val();
    switch (n) {
      case "btech":
        $("#Stream").html(
          "<option value='EEE'>Electrical Engineering</option><option value='CS'>Computer Science</option><option value='BIO'>BioTechnology</option><option value='IT'>Information Technology</option><option value='ME'>Mechanical Engineering</option>"
        );
        break;
      case "ba":
        $("#Stream").html(
          "<option value='Economics'>Economics</option><option value='Political Science'>Political Science</option><option value='psycho'>Psychology</option><option value='History>History</option><option value='Geography'>Geography</option>"
        );
        break;
      case "bcom":
        $("#Stream").html(
          "<option value='Finance'>Finance</option><option value='Accountancy'>Accountancy</option><option value='Marketing'>Marketing</option><option value='Banking'>Banking Management</option><option value='Corporate Law'>Corporate Law</option>"
        );
        break;
      case "bsc":
        $("#Stream").html(
          "<option value='Agri'>Agriculture</option><option value='Zoology'>Zoology</option><option value='Physics'>Physics</option><option value='Chemistry'>Chemistry</option><option value='Math'>Mathematics and Statistics</option>"
        );
    }
  });
});



//->>>>>>>>>>>>> store the of enroll student

function store() {
  console.log('hii');
  $("input").each(function () {
    var getInputName = $(this).attr("name");
    var type=$(this).attr("type")
     if(type==="radio"){
        if($(this).is(':checked')){
          console.log($(this).val())
          localStorage.setItem(getInputName,$(this).val());
        }
     }
     else{
      console.log($(this).val())
         localStorage.setItem(getInputName,$(this).val());
     }
   
  });
  $("textarea,select").each(function () {
    var getInputName = $(this).attr("name");
    console.log($(this).val())
      localStorage.setItem(getInputName,$(this).val());
    
   
  });

}


// --------------------->for testimonial slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
