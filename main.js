jQuery(function ($) {
	$( init );
		function init() {

         $("bootstrap_button").replaceWith(function(){
          return '<button><span> '+$(this).text()+'</span></button>' ;
        });

	}
});