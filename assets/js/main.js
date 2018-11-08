/*
	Industrious by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

var youtube = document.querySelectorAll( ".youtube" );
	
for (var i = 0; i < youtube.length; i++) {  
	// thumbnail image source.
    var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/hqdefault.jpg"; 
	
	// Load the image asynchronously 
	var image = new Image();
	image.src = source;
	image.addEventListener( "load", function() {
		youtube[ i ].appendChild( image );
	}( i ) );
	
	youtube[i].addEventListener( "click", function() {
 
        var iframe = document.createElement( "iframe" );
 
			iframe.setAttribute( "frameborder", "0" );
            iframe.setAttribute( "allowfullscreen", "" );
            iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
 
            this.innerHTML = "";
            this.appendChild( iframe );
    } );	
}



(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	var scrollLink = $('.scroll');

	//Smooth Scrolling
	scrollLink.click(function(event) {
		event.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1250);//.animate method looking for CSS properties
	});

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);
