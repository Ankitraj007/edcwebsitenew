
$(document).ready(function(){
    
    var x =document.getElementsByClassName("item");

    var i = 1;
    function addRadioButton(){
        var $input = $('<li data-target="#myCarousel"></li>');
        $input.attr("data-slide-to",i);
        $input.appendTo($('ol[class="carousel-indicators"]'));
       
    }
    function addEtalkButton(){
        var $input = $('<li data-target="#myCarousel" type="button" class="btn">E-TALKS</li>');
        $input.attr("data-slide-to",i);
        $input.appendTo($('ol[class="E_talks_button"]'));
    }
    while(i<=x.length-1){
        addRadioButton();
        addEtalkButton();
        i++;
    }
//highlight
       $(".E-talks-button li").click(function(){
        var a = $(this);
        a.css("background-color","#0C7AB8");
        $(".E-talks-button li").click(function(){
            if($(this)!==a){
                a.css("background-color","white");
                $(this).css("background-color","#0C7AB8");
            }else{
                a.css("background-color","#0C7AB8");
            }
        });
        
       
    });
//hl//

//new Active State
$('.carousel-indicators li').click(function(){
    var a = $(this);
    var dataslidevalue = a.attr("data-slide-to");
    $('.E_talks_button li[data-slide-to="'+dataslidevalue+'"]').css("background-color","#0C7AB8");
    $(".carousel-indicators li").click(function(){
            if($(this)!==a){
                $('.E_talks_button li[data-slide-to="'+dataslidevalue+'"]').css("background-color","white");
                var dataslidevaluenew = $(this).attr("data-slide-to");
                $('.E_talks_button li[data-slide-to="'+dataslidevaluenew+'"]').css("background-color","#0C7AB8");
            }else{
                $('.E_talks_button li[data-slide-to="'+dataslidevalue+'"]').css("background-color","#0C7AB8");
            }
        });
});
    

    
    
    
     
//new Active State


});
























