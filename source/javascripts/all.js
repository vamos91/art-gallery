//= require jquery
//= require bootstrap-sprockets
//= require_tree .
//
//
  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );



$(document).ready(function(){
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});


function Activate_details{
  $(".portfolio").removeClass("details");

}
