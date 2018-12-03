setInterval(function(){
$(document).ready(function(){
	var scr=document.documentElement.scrollTop;
	var c=document.documentElement.clientWidth;
		if(scr>=0.0078*c && scr<=0.085*c){
			$(".exp").css({"display":"block"})
			console.log(scr)
			$(".exp").click(function(){
				$("html").scrollTop(0.52*c);
			})
		}
		else if(scr>=0.494*c && scr<=0.552*c){
			$(".exp1").css({"display":"block"})
			console.log(scr)
			$(".exp1").click(function(){
				$("html").scrollTop(1.04*c);
			})
		}
		else if(scr>=0.963*c && scr<=1.11*c){
			$(".exp2").css({"display":"block"})
			$(".exp2").css({"border":"0.1875vw solid #11749e"})
			console.log(scr)
			$(".exp2").click(function(){
				$("html").scrollTop(1.614*c);
			})
		}
		else if(scr>=1.69*c && scr<=1.74*c){
			$(".exp3").css({"display":"block"})
			$(".exp3").css({"border":"0.1875vw solid #11749e"})
			console.log(scr)
			$(".exp3").click(function(){
				$("html").scrollTop(2.44*c);
			})
		}
		else if(scr>=2.29*c && scr<=2.53*c){
			$(".exp4").css({"display":"block"})
			console.log(scr)
			$(".exp4").click(function(){
				$("html").scrollTop(3.02*c);
			})
		}
		else if(scr>=2.95*c && scr<=3.08*c){
			$(".exp5").css({"display":"block"})
			$(".exp5").css({"border":"0.1875vw solid #11749e"})
			console.log(scr)
			$(".exp5").click(function(){
				$("html").scrollTop(3.67*c);
			})
		}
		else if(scr>=3.6*c && scr<=4*c){
			$(".exp6").css({"display":"block"})
			console.log(scr)
			$(".exp6").click(function(){
				$("html").scrollTop(0*c);
			})
		}
		else{
			$(".exp, .exp1, .exp2, .exp3 ,.exp4 ,.exp5 ,.exp6").css({"display":"none"})
			$(".exp").css({"border":"0.1875vw solid white"})
		}
		var d=c*0.52;
		console.log(d);
});
},50);
/*
			
		}
		else{
			$(".exp").css({"background-color":"orange"})
		}
		*/