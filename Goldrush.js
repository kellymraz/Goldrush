$(function(){
// 	$("body").append("<h1> jquery </h1>")

	$(".map-container").on( "mousemove", function(event){


		$("#log").text("pageX : " + event.pageX + ", pageY : " + event.pageY);

	})

	$(".map-container").on("click", function(event){
		var x = event.pageX;
		var y = event.pageY;
		var markerDot = $("<div class = 'marker'></div>").css({
				top : (y - 15) + "px",
				left : (x - 12)+ "px"
		})
		$(".map-container").append(markerDot)



	})










});

// The very top line establishes the link btw
// html and jquery.
// We want a snapshot of x,y so we can set content there.  