
//Google Analytics
(function(i, s, o, g, r, a, m) {
	i['GoogleAnalyticsObject'] = r;
	i[r] = i[r] || function() {
		(i[r].q = i[r].q || []).push(arguments)
	}, i[r].l = 1 * new Date();
	a = s.createElement(o),
		m = s.getElementsByTagName(o)[0];
	a.async = 1;
	a.src = g;
	m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-67827907-1', 'auto');
ga('send', 'pageview');

(function($) {
	
	//	Back to top
	var offset = 500;
	var duration = 500;
	$(window).scroll(function() {
		if ($(this).scrollTop() > offset) {
			$('.back-to-top').css({display:'inline-block'});
		} else {
			jQuery('.back-to-top').hide();
		}
	});
	
	$('.back-to-top').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
	
	//	Show wechat qr_code	
	var $qr_code = $('.wechat-hover');
	$('.wechat-follow-button').click(function() {
		event.preventDefault();
		if ($qr_code.is(':hidden')) {
			$qr_code.show();
		} else {
			$qr_code.hide();
		}
		return false;
	});
})(jQuery);


