$(document).ready(function(){
    var a;
  
    $(".flex-container div div div").mouseover(function(){
        a = $(this);
        a.parent().css("display","none");
        a.parent().parent().find("div:nth-child(2)").css("display","block");
        a.parent().parent().addClass("addclass_fullimage");
            $(".flex-container div div div").mouseover(function(){
            if($(this) !== a){
                a.parent().css("display","block");
                a.parent().parent().find("div:nth-child(2)").css("display","none");
                a.parent().parent().removeClass("addclass_fullimage");
                $(this).parent().css("display","none");
                $(this).parent().parent().find("div:nth-child(2)").css("display","block");
                $(this).parent().parent().addClass("addclass_fullimage");
            }else if ($(this)== a) {
                    $(this).parent().css("display","none");
                    $(this).parent().parent().find("div:nth-child(2)").css("display","block");
                    $(this).parent().parent().addClass("addclass_fullimage");
            }
        
            });
     });
    $(".overlay_content").mouseleave(function(){
        a.parent().css("display","block");
        a.parent().parent().find("div:nth-child(2)").css("display","none");
        a.parent().parent().removeClass("addclass_fullimage");
    });

});

$('.overlay_content ul li a').click(function(e) {
    
});