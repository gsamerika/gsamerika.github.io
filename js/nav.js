$(window).bind("load", function() {
	var $navitem = $("#nav").contents().find(".navitem");
	//alert($navitem);
	$("#nav").contents().find(".navitem").on("click", function(){
		$("#content").attr("src",$(this).attr("data-link"));
	});
});

