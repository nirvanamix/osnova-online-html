jQuery(document).ready(function($) {

	$('.slider-for').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: false,
		// centerMode: true,
		responsive: [
			{
			breakpoint: 750,
			settings: {
					slidesToShow: 1,
				}
			},
		]
	});


	$('.slider-for').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		setTimeout(function(){
			$('.slider-for .item').find('iframe').attr('src', " ");
		}, 480);
		
	});








	$('.slider-for .item').click(function(event) {
		var win_w = $(window).width();
		if(win_w >= 750){
			var has_cl = $(this).hasClass('slick-current');
			if(has_cl == true){
				$('.slick-prev').trigger('click');
			}
			var has_w = $(this).prev('.item').prev('.item').hasClass('slick-current');
			if(has_w == true){
				$('.slick-next').trigger('click');
			}
		}
		/*---------------------------------*/
		var th = $(this);
		setTimeout(function(){
			$('.slider-for .item').removeClass('active-video')
			th.addClass('active-video');
			$('.slider-for .item').not(th).find('iframe').attr('src', " ");
			var data_src = th.find('iframe').attr('data-src');
			th.find('iframe').attr('src', data_src + '?autoplay=1');
		}, 500);
	});




	/*video carusel*/
	
	/*video carusel*/














});