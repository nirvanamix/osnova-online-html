jQuery(document).ready(function($) {
	const question = {
		fun: () =>{
			$('.question-block span').click(function(event) {
				$(this).toggleClass('active');
				$('.question-text-wr').slideToggle(200);
			});
		}
	}
	question.fun();
	const acardion = {
		fun: () => {
			$('.acardion .top').click(function(event) {
				$(this).toggleClass('active');
				$(this).parent('.item').find('.bottom').slideToggle(400);
			});
		}
	}
	acardion.fun();
	const phone = {
		fun: () =>{
			$('.phone-block .nav-click').click(function(event) {
				$('.phone-block .block-social').slideToggle(100);
			});
			jQuery('body').click( function(event){
				if(jQuery(event.target).closest(".phone-block").length ) 
				return;
					$('.phone-block .block-social').slideUp(100);
				event.stopPropagation();
			});
		}
	}
	phone.fun();
	const moda_window = {
		fun: ()=>{
			/*modal windows*/
			$('.video-block .link-play a').click(function(event) {
				event.preventDefault();
			});
			// responsive video
			function function_iframe() {
				$('.video-window').each(function(index, el) {
					var widht_modal = $(this).find('.window iframe').outerWidth();
					var formula = widht_modal * 4 / 7;
					$(this).find('.window iframe').height(formula);
				});
			}
			$('body').on('click', 'a[data-modal=modal-video]', function(event){
				var data_src = $('.modal-window[data-modal=modal-video]').find('iframe').attr('data-src');
				$('.modal-window[data-modal=modal-video]').find('iframe').attr('src', data_src + '?autoplay=1');
			});
			$('body').on('click', 'a[data-modal]', function(event){
				event.preventDefault();
				$('.modal-window').fadeOut(400).removeClass('active');
				var data_modal = $(this).attr('data-modal');
				$('.modal-window[data-modal="' + data_modal +'"]').fadeIn(400).addClass('active');
				$('html, body').addClass('overflow-body')
				function_iframe();
				jQuery(window).resize(function() {
					clearTimeout(window.resizedFinished);
					window.resizedFinished = setTimeout(function(){
						function_iframe();
					}, 500);
				});
			});
			$('body').on('click', '.close-win', function(event){
				$('.modal-window').fadeOut(400);
				$('.modal-window').removeClass('active');
				$('.video-window').find('iframe').attr('src', ' ');
				$('html, body').removeClass('overflow-body');
			});
			jQuery('.modal-window').click( function(event){
				if(jQuery(event.target).closest(".window").length ) 
				return;
					$('.modal-window').fadeOut(400);
					$('.modal-window').removeClass('active');
					$('.video-window').find('iframe').attr('src', ' ');
					$('html, body').removeClass('overflow-body');
				event.stopPropagation();
			});
			/*video-items*/
		}
	} 
	moda_window.fun();
	const mobile_detals = {
		fun: () =>{
			$('.section-pacets .mobile-detals span').click(function(event) {
				$(this).parents('.item').addClass('active').find('.wr-mobile').slideDown(400).parents('.item').find('.link-two').fadeIn(400);
				$(this).parents('.mobile-detals').remove();
			});

			$('.section-who-is-course .mobile-detals span').click(function(event) {
				$(this).parents('.item').addClass('active').find('ul').slideDown(400).parents('.item').find('.link-two').fadeIn(400);
				$(this).parents('.mobile-detals').remove();
			});


			$('footer ul li').first().click(function(event) {
				$(this).parents('ul').toggleClass('active');
			});

			$('.mobile-menu').click(function(event) {
				$('.wrapper').toggleClass('active');
			});
		}
	}
	mobile_detals.fun();
	var auncor = {
		fun: () => {
			jQuery('a.auncor').click(function(event){
				$('.wrapper').removeClass('active');
				history.pushState({}, "", $(this).attr('href'));
				var target = $(this).attr('href').replace('/', '');
				var scroll_t = $(window).scrollTop();
				if(scroll_t<=60){
					$('html, body').stop(true, false).animate({scrollTop: $(target).offset().top - 0}, 900);
				}
				else{
					$('html, body').stop(true, false).animate({scrollTop: $(target).offset().top - 0}, 900);
				}
				return false;
			});
		}
	}
	auncor.fun();
});