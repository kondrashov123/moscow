$(document).ready(function () {
	$('.burger_menu').click(function(event){
		$('.burger_menu,.main-menu').toggleClass("active");
	});
});
$(document).ready(function(){
	$('.projects__slider .row').slick({
		infinite: false,
		arrows: false,
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive:[
			{
				breakpoint: 1330,
				settings:{
					slidesToShow:3,
				},
			},
			{
				breakpoint: 769,
				settings:{
					autoplay: true,
					slidesToShow: 2,
					autoplaySpeed: 2000,
				}
			},
			{
				breakpoint:576,
				settings:{
					slidesToShow:1,
				}
			}
		]
	});
});