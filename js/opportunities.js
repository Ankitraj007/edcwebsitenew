var y = document.getElementsByClassName("paneltab");
var j = 1;
var i;

function addLink(){
        var currentDiv = "currentDiv("+j+")" 
        var $input = $('<a href="#" class="panel_button demo" style="font-size:30px;border-left:2px solid #000000;color:#000000;margin-left:10px;padding-left:10px;">'+j+'</a>');
        $input.attr("onclick",currentDiv)
        $input.appendTo($("section"));
        
    }



while(j<= y.length){
    addLink()
    j++
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" color_panel_button", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " color_panel_button";
}


$('.panel_button').click(function(e) {
    e.preventDefault();
});
