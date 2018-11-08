$(".project-detail").slick({
	slidesToShow: 1,
	arrows: false,
	asNavFor: '.project-strip',
	autoplay: true,
	autoplaySpeed: 1000
});

$(".project-strip").slick({
	slidesToShow: 5,
	slidesToScroll: 1,
	arrows: false,
	asNavFor: '.project-detail',
	dots: false,
	infinite: true,
	centerMode: true,
	focusOnSelect: true
});

