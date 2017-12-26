
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
        var b = $(this);
        b.addClass('active_active');
        $(".E-talks-button li").click(function(){
            if($(this)!==b){
                b.css("background-color","white");
                $(this).addClass('active_active');
            }else{
                b.addClass('active_active');
            }
        });

       
    });
      
//hl//
$('#myCarousel').on('slid.bs.carousel', function() {

    var currentIndex = $('div.active').index();
    $('.E_talks_button li').each(function(index) {
        
        if(index == currentIndex){
        $(this).addClass('active_active');
        }else{
        $(this).removeClass('active_active');
    }
    });
    
});


    


//new Active State


});
























