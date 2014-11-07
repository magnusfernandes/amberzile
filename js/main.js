var screenheight = window.innerHeight;
var screenwidth = window.innerWidth;
function sliderresize(){
		   if( window.innerWidth >=980){
			   screenheight = window.innerHeight;
			   screenheight = screenheight - 203;
			   document.getElementById('slider').style.height = sliderheight + "px";
		   }
		   if( window.innerWidth < 980){
				document.getElementById('slider').style.height = "auto";
		   }
    };
function start(){
	screenheight = window.innerHeight;
	screenwidth = window.innerWidth;
	if( window.innerWidth >=980){
		sliderheight = screenheight - 203;
		document.getElementById('slider').style.height = sliderheight + "px";
	}
	if(window.innerWidth < 980){
		document.getElementById('slider').style.height = "auto";
	}
}
window.in = sliderresize;
window.onload = start;