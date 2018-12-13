$(document).ready(function(){
	$(".btncomm").click(function(){
		$(".feedback").css({"display":"block"})
	});
	$(".exit").click(function(){
		$(".feedback").css({"display":"none"})
	});
});
$(window).scroll(function(){
	$(document).ready(function(){
		var scr=document.documentElement.scrollTop;
		var c=document.documentElement.clientWidth;
		if(scr>=0 && scr<=0.2*c){
			$(".exp").css({"display":"block"})
		}
		else if(scr>=0.494*c && scr<=0.552*c){
			$(".exp").css({"display":"block"})
		}
		else if(scr>=0.963*c && scr<=1.11*c){
			$(".exp").css({"display":"block"})
			$(".exp").css({"border":"0.1875vw solid #11749e"})
			$(".exp").css({"background-image":"url(../img/blue.png)"})
		}
		else if(scr>=1.6*c && scr<=1.74*c){
			$(".exp").css({"display":"block"})
			$(".exp").css({"border":"0.1875vw solid #11749e"})
			$(".exp").css({"background-image":"url(../img/blue.png)"})
		}
		else if(scr>=2.29*c && scr<=2.53*c){
			$(".exp").css({"display":"block"})
		}
		else if(scr>=2.95*c && scr<=3.08*c){
			$(".exp").css({"display":"block"})
			$(".exp").css({"border":"0.1875vw solid #11749e"})
			$(".exp").css({"background-image":"url(../img/blue.png)"})
		}
		else if(scr>=3.2*c && scr<=4*c){
			$(".exp").css({"display":"block"})
			$(".exp").css({"transform": "rotate(180deg)"});
		}
		else{
			$(".exp").css({"display":"none"})
			$(".exp").css({"border":"0.1875vw solid white"})
			$(".exp").css({"backgroud-image":"url(../img/st.png)"})
		}
	});
});
$(document).ready(function(){
	var csr;
	var c=document.documentElement.clientWidth;
	$(window).scroll(function(){
	scr=document.documentElement.scrollTop;
	});
			$(".exp").click(function(){
				if(scr>=0 && scr<=0.2*c){
				$("html").animate({"scrollTop":0.52*c},1000);
				}
				else if(scr>=0.494*c && scr<=0.552*c){
				$("html").animate({"scrollTop":1.04*c},1000);
				}
				else if(scr>=0.963*c && scr<=1.11*c){
				$("html").animate({"scrollTop":1.614*c},1000);
				}
				else if(scr>=1.6*c && scr<=1.74*c){
				$("html").animate({"scrollTop":2.44*c},1000);
				}
				else if(scr>=2.29*c && scr<=2.53*c){
				$("html").animate({"scrollTop":3.02*c},1000);
				}
				else if(scr>=2.95*c && scr<=3.08*c){
				$("html").animate({"scrollTop":3.67*c},1000);
				}
				else if(scr>=3.2*c && scr<=4*c){
				$("html").animate({"scrollTop":0},1000);
				}
			})	
});