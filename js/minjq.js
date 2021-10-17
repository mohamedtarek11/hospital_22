$(document).ready(function(){
    $(".register-form input[type=file]").wrap("<div class='upload'></div>")
    $(".upload").prepend("<span class='up-text'>upload Files</span>")
    $(".upload").append("<i class='fas fa-chevron-circle-up icon'></i>")
    $(".register-form input[type=file]").change(function(){
        $(".up-text").text($(this).val());
    })
    $("[required]").blur(function(e){  
         
        if($(this).val()==""){
            e.preventDefault();
       $(".error-mgs").each(function(){
           $(this).animate({top:"468px"},2000).delay(2000).animate({top:"100%"},2000)
       })
        }
     })
        $(".prog").each(function(){
           $(this).animate({width:"100%"},2000 ,function(){
               $(this).fadeOut(1000)
               $(".section-text").fadeIn(3000)
           })  
        })
   $(".setting-icon").click(function(){
       $(this).toggleClass("mmm");
       if($(this).hasClass("mmm")){
$(".setting").animate({
    left:"0px"
    
},1000)
}
else{$(".setting").animate({left:"-200px"},1000)}
   }) 
   

   $("ul li a").click(function(event){
       event.preventDefault();
       $("body,html").animate({
           scrollTop : $("#"+$(this).data('scroll')).offset().top-75
       },1000)
       $(this).addClass("active").parent().siblings().find('a').removeClass("active")
   })
   $(window).scroll(function(){
    if($(this).scrollTop()>3000){
        $(".finaldown").slideDown(6000)
    }
        if($(this).scrollTop()>=1457){
          $(".seth,.seth1,.seth3,.seth2").slideDown(3000)
        }
   })
     
   var zIndex= 0;
  $(".cards .ca").on("click",function(){
      $(this).animate({
           left:"-=20%",
            marginTop:"50px", 

    },1000,function(){
        zIndex--;
        $(this).css("z-index",zIndex);

    }).animate({
        left:"+=20%",
        marginTop:"0px",
    
    },1000)
  })
  $("ul li span").click(function(){
      $(".popup").fadeIn(1000)
  });
  $(".popup").click(function(){
      $(this).fadeOut(1000)
  })
  $(".popup .popo-content").click(function(e){
      e.stopPropagation();
  })

})