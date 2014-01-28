/*******

        ***        Anchor Slider by Cedric Dugas ***
        *** Http://www.position-absolute.com ***
        
        Never have an anchor jumping your content, slide it.

        Don't forget to put an id to your anchor !
        You can use and modify this script for any project you want, but please leave this comment as credit.
        
*****/
                


jQuery.fn.anchorAnimate = function(settings) {

         settings = jQuery.extend({
                speed : 1100
        }, settings);        
        function jq( myhref ) {
		return myhref.replace( /(:|\.|\[|\])/g, "\\$1" );
	}
        return this.each(function(){
                var caller = this
                $(caller).click(function (event) {        
                        event.preventDefault()
                        var locationHref = window.location.href
			var rawClick = $(caller).attr("href");
                        var elementClick = jq(rawClick);
                        
                        var destination = $(elementClick).offset().top;
                        $("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination}, settings.speed, function() {
                                window.location.hash = elementClick
                        });
                         return false;
                })
        })
}

jQuery(document).ready(function() {
        jQuery("a.anchorLink").anchorAnimate()
});
