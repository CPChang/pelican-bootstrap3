$(document).ready(function() {
	// Every image with class figcap
	$("img.figcap").each(function() {
		// Let's put a caption if there is one
		if($(this).attr("alt"))
			$(this).wrap(function(){
						return "<figure class='" + $(this).attr('class') + "'></figure>";
					}
				).after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
			$(this).removeClass();
		});
		
});


// $(document).ready(function() {
	// // Every image with class figcap
	// $("img.figcap").each(function() {
		// // Let's put a caption if there is one
		// if($(this).attr("alt"))
			// $(this).wrap('<figure class="image"></figure>')
				// .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
		// });
// });