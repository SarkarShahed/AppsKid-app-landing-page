(function ($) {
 "use strict";
$(document).ready(function(){
	  
		/*
		Mean Menu Responsive
		============================*/		
        jQuery('nav#main-menu').meanmenu();		
		
		/*
		Happy Client Testimonial Crousel Js
		============================*/ 	
         $('.client-active').owlCarousel({
			    loop:true,
				autoplay:false,
			    nav:false,
				dots:false,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:2
			        },
			        1000:{
			            items:2
			        }
			    }
			})	
		/*
		Apps Screenshot slick Crousel
		============================*/ 	
		$('.all-apps-screenshots').slick({
		  slidesToShow: 5,
		  slidesToScroll: 5,
		  autoplay:true,
		  dots: true,
		  arrows: false,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				autoplay:true,
				centerPadding: '0px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				autoplay:true,
				centerPadding: '0px',
				slidesToShow: 1
			  }
			}
		  ]
		});

		/*
		Stikey Js
		============================*/ 
		(function () {
			var nav = $('.menu-sticky');
			var scrolled = false;
			$(window).scroll(function () {
				if (120 < $(window).scrollTop() && !scrolled) {
					nav.addClass('sticky_menu animated fadeInDown').animate({ 'margin-top': '0px' });
					scrolled = true;
				}
				if (120 > $(window).scrollTop() && scrolled) {
					nav.removeClass('sticky_menu animated fadeInDown').css('margin-top', '0px');
					scrolled = false;
				}
			});
		}());		
		
		/*
		Magnific Popup
		============================*/ 		
        $('.gallery-photo').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            },
        });	 

		/*
		Ripples Watter Effect Js
		============================*/ 
		$('.vedio-sec').ripples({
			resolution: 512,
			dropRadius: 20,
			perturbance: 0.04,
		});	
		
		/*
		Anchor Link Scrolling Js
		============================*/ 		
		$('a[href^="#"]').on('click',function (e) {
			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing', function () {
				window.location.hash = target;
			});
		});
		
		/*
		Google Map Js
		============================*/ 	
		google.maps.event.addDomListener(window, 'load', init);        
		function init() {

			var mapOptions = {
				zoom: 11,
				center: new google.maps.LatLng(40.6700, -73.9400),
				styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
			};
			var mapElement = document.getElementById('map_id');
			var map = new google.maps.Map(mapElement, mapOptions);
			var marker = new google.maps.Marker({
				position: new google.maps.LatLng(40.6700, -73.9400),
				map: map,
				title: 'New York!'
			});
		}
		
		/*
		Youtube Vedio Background Js
		============================*/ 	
		$('#vedio-bg').YTPlayer({
			fitToBackground: true,
			videoId: '7e90gBu4pas',
			mute: false
		});
		/*
		Counter Js
		============================*/ 
        $('.counter').counterUp({
            delay: 10,
            time: 1000			
        });	
		
		/*
		Menu Active Js
		============================*/ 
		$(document).ready(function(){
		  $('.main-menu li').click(function(){
			$('.main-menu li').removeClass("active");
			$(this).addClass("active");
		});
		});
				
		/*
		Preeloader
		============================*/
		$(window).on("load", function() {
			$('#preloader').fadeOut();
			$('#preloader-status').delay(200).fadeOut('slow');
			$('body').delay(200).css({'overflow-x':'hidden'});
		});
	
	});	
})(jQuery);

