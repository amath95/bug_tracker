
/*
On menu toggle
shift the navbar left
hide the logo
hide the name
shift the menu button left
center the menu
center icons
hide the menu titles
*/
$(".menu").on("click",
  function(){
    $(".sidebar").toggleClass("toggle-sidebar"); //shift navbar
    $(".logo-icon").toggleClass("hidden"); //Hide the logo
    $(".menu").toggleClass("shift-menu"); // Shift menu
    $(".title").toggleClass("hide"); //Hide the menu titles and Logo Name;
    $(".option").toggleClass("center-icons"); //Center the icons
    $(".home-content").toggleClass("home-content-shift"); //Shift content area;
    $(".grid-container").toggleClass("shift");
  }
);

/*
On button press
Remove current active button
Make next button active
*/
// var curr ="";
$(".option").on("click",function(){

  $(".active").removeClass("active");
  $(this).addClass("active");

  $("section").addClass("hidden");
  var currPage = $(this).find(".title").text();
  $("#"+currPage).removeClass("hidden");

});

// $(".form_submit").on("click"),()=>{
//
//   $("form").reset();
//
// });



  // curr = $(".icon .title");
