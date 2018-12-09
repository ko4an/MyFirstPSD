/*setInterval(function(){
$(document).ready(function(){
	var scr=document.documentElement.scrollTop;
	var c=document.documentElement.clientWidth;
		if(scr>=0.00001*c && scr<=0.2*c){
			$(".exp").css({"display":"block"})
			console.log(scr)
			$(".exp").click(function(){
				$("html").animate({"scrollTop":0.52*c},1000);
			})
		}
		else if(scr>=0.494*c && scr<=0.552*c){
			$(".exp1").css({"display":"block"})
			console.log(scr)
			$(".exp1").click(function(){
				$("html").animate({"scrollTop":1.04*c},1000);
			})
		}
		else if(scr>=0.963*c && scr<=1.11*c){
			$(".exp2").css({"display":"block"})
			$(".exp2").css({"border":"0.1875vw solid #11749e"})
			$(".exp2").css({"background-image":"url(../img/blue.png)"})
			$(".exp2").click(function(){
				$("html").animate({"scrollTop":1.614*c},1000);
			})
		}
		else if(scr>=1.6*c && scr<=1.74*c){
			$(".exp3").css({"display":"block"})
			$(".exp3").css({"border":"0.1875vw solid #11749e"})
			$(".exp3").css({"background-image":"url(../img/blue.png)"})
			$(".exp3").click(function(){
				$("html").animate({"scrollTop":2.44*c},1000);
			})
		}
		else if(scr>=2.29*c && scr<=2.53*c){
			$(".exp4").css({"display":"block"})
			$(".exp4").click(function(){
				$("html").animate({"scrollTop":3.02*c},1000);
			})
		}
		else if(scr>=2.95*c && scr<=3.08*c){
			$(".exp5").css({"display":"block"})
			$(".exp5").css({"border":"0.1875vw solid #11749e"})
			$(".exp5").css({"background-image":"url(../img/blue.png)"})
			$(".exp5").click(function(){
				$("html").animate({"scrollTop":3.67*c},1000);
			})
		}
		else if(scr>=3.2*c && scr<=4*c){
			$(".exp6").css({"display":"block"})
			$(".exp6").click(function(){
				$("html").animate({"scrollTop":0.1*c},1000);
			})
		}
		else{
			$(".exp, .exp1, .exp2, .exp3 ,.exp4 ,.exp5 ,.exp6").css({"display":"none"})
			$(".exp").css({"border":"0.1875vw solid white"})
			$(".exp, .exp1, .exp2, .exp3 ,.exp4 ,.exp5 ,.exp6").css({"backgroud-image":"url(../img/st.png)"})
		}
		var d=c*0.52;
		console.log(d);
});
},1500);
*/
$(document).ready(function(){
	$(".btncomm").click(function(){
		$(".feedback").css({"display":"block"})
	});
	$(".exit").click(function(){
		$(".feedback").css({"display":"none"})
	});
});