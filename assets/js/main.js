/*
	Arcana by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			offsetY: -15,
			hoverDelay: 0,
			alignment: 'center'
		});

	// Nav.

		// Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

//button to expand reviews
function show1(){  
    document.getElementById('client-comment-expand1').style="height:fit-content;";  
    document.getElementById('more1').style="display:none;";  
    document.getElementById('collapse1').style="display:block;";  
    }  
    function collapse1(){  
    document.getElementById('client-comment-expand1').style="height:25vh;";  
    document.getElementById('more1').style="display:block;";  
    document.getElementById('collapse1').style="display:none;";  
    } 

function show2(){  
    document.getElementById('client-comment-expand2').style="height:fit-content;";  
    document.getElementById('more2').style="display:none;";  
    document.getElementById('collapse2').style="display:block;";  
    }  
function collapse2(){  
    document.getElementById('client-comment-expand2').style="height:25vh;";  
    document.getElementById('more2').style="display:block;";  
    document.getElementById('collapse2').style="display:none;";  
    } 

function show3(){  
    document.getElementById('client-comment-expand3').style="height:fit-content;";  
    document.getElementById('more3').style="display:none;";  
    document.getElementById('collapse3').style="display:block;";  
    }  
function collapse3(){  
    document.getElementById('client-comment-expand3').style="height:25vh;";  
    document.getElementById('more3').style="display:block;";  
    document.getElementById('collapse3').style="display:none;";  
    } 