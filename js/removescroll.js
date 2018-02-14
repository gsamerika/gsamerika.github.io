function scrollBars(){
	var body= $('body')[0];
	return {
		vertical:body.scrollHeight>body.clientHeight,
		horizontal:body.scrollWidth>body.clientWidth
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

$(document).ready(function(){
	setInterval(sizeWindows,1000);
});

function sizeWindows() {
	$(".window").css("height",
	$(window).height().toString().concat("px"));
}