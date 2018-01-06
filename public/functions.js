$(function(){

  $(document).ready(function(){
    $('#nav-icon').click(function(){
      $(this).toggleClass('open');
    });
  });

  
  $("#nav-icon").on("click", ()=>{
      $("nav ul:last-of-type").toggle();
  });

  if(window.innerWidth > 1120){
    $("nav ul:last-of-type").css({"display": ""});
  }

  $(window).on("resize", ()=>{
    if(window.innerWidth > 1120){
        $("nav ul:last-of-type").css({"display": ""});
      }else{
        $("nav ul:last-of-type").css({"display": "none"});
      }
  });

  
});