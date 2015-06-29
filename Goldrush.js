$(function(){
// 	$("body").append("<h1> jquery </h1>")

	$(".map-container").on( "mousemove", function(event){


		$("#log").text("pageX : " + event.pageX + ", pageY : " + event.pageY);

	})

	$(".map-container").on("click", function(event){
		var x = event.pageX;
		var y = event.pageY;
		$(".map-container").append("<div class = 'marker'></div>").css({
			"top" : y + "px",
			"left" : x + "px"
	})



	})










});

// The very top line establishes the link btw
// html and jquery.
// We want a snapshot of x,y so we can set content there.  