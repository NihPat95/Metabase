
  $(window).on('load', function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      }); 

      // intro section animation
     	if (!$("html").hasClass('no-cssanimations')) {

     		setTimeout(function(){

    			$('body .animate-intro').each(function(ctr) {

					var el = $(this),
                  animationEfx = el.data('animate');

               if (animationEfx === null || animationEfx === undefined || animationEfx.trim() === "") {
                 	animationEfx = "fadeInUp";
               }

              	setTimeout( function () {
						el.addClass(animationEfx + ' animated');
					}, ctr * 100);

				});
					
			}, 1000);
     	}   	   	

  	});