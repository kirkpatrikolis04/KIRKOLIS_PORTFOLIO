		var menu = document.querySelector('#hamburger');
		var toggle = false;
		menu.addEventListener('click', function(){
			if(!toggle){
				toggle = true;
				document.querySelector('.line3').style.width = '0';
				document.querySelector('.line2').style.width = '0';
				document.querySelector('.line1').style.width = '0';
				document.querySelector('.line1').style.transitionDelay = '0.3s';
				document.querySelector('.line2').style.transitionDelay = '0.2s';
				document.querySelector('.line3').style.transitionDelay = '0.1s';
				document.querySelector('.line4').style.width = '30px';
				document.querySelector('.line5').style.width = '30px';
				document.querySelector('.line4').style.transitionDelay = '0.4s';
				document.querySelector('.line5').style.transitionDelay = '0.5s';
				document.querySelector('.menu1').style.opacity = '1';
				document.querySelector('.menu2').style.opacity = '1';
				document.querySelector('.menu3').style.opacity = '1';
				document.querySelector('.menu4').style.opacity = '1';
				document.querySelector('.menu5').style.opacity = '1';
				document.querySelector('.menu11').style.opacity = '1';
				document.querySelector('.menu1').style.transitionDelay = '0.9s';
				document.querySelector('.menu2').style.transitionDelay = '0.8s';
				document.querySelector('.menu3').style.transitionDelay = '0.7s';
				document.querySelector('.menu4').style.transitionDelay = '0.6s';
				document.querySelector('.menu5').style.transitionDelay = '0.5s';
				document.querySelector('.menu11').style.transitionDelay = '0.4s';

				document.querySelector('.line8').style.width = '0';
				document.querySelector('.line7').style.width = '0';
				document.querySelector('.line6').style.width = '0';
				document.querySelector('.line6').style.transitionDelay = '0.3s';
				document.querySelector('.line7').style.transitionDelay = '0.2s';
				document.querySelector('.line8').style.transitionDelay = '0.1s';
				document.querySelector('.line9').style.width = '30px';
				document.querySelector('.line10').style.width = '30px';
				document.querySelector('.line9').style.transitionDelay = '0.4s';
				document.querySelector('.line10').style.transitionDelay = '0.5s';
				document.querySelector('.menu6').style.opacity = '1';
				document.querySelector('.menu7').style.opacity = '1';
				document.querySelector('.menu8').style.opacity = '1';
				document.querySelector('.menu9').style.opacity = '1';
				document.querySelector('.menu10').style.opacity = '1';
				document.querySelector('.menu12').style.opacity = '1';
				document.querySelector('.menu6').style.transitionDelay = '0.9s';
				document.querySelector('.menu7').style.transitionDelay = '0.8s';
				document.querySelector('.menu8').style.transitionDelay = '0.7s';
				document.querySelector('.menu9').style.transitionDelay = '0.6s';
				document.querySelector('.menu10').style.transitionDelay = '0.5s';
				document.querySelector('.menu12').style.transitionDelay = '0.4s';
				return;
			}
			
			if(toggle){
				toggle = false;
				document.querySelector('.line3').style.width = '30px';
				document.querySelector('.line2').style.width = '30px';
				document.querySelector('.line1').style.width = '30px';
				document.querySelector('.line1').style.transitionDelay = '0.6s';
				document.querySelector('.line2').style.transitionDelay = '0.7s';
				document.querySelector('.line3').style.transitionDelay = '0.8s';
				document.querySelector('.line4').style.width = '0';
				document.querySelector('.line5').style.width = '0';
				document.querySelector('.menu1').style.opacity = '0';
				document.querySelector('.menu2').style.opacity = '0';
				document.querySelector('.menu3').style.opacity = '0';
				document.querySelector('.menu4').style.opacity = '0';
				document.querySelector('.menu5').style.opacity = '0';
				document.querySelector('.menu11').style.opacity = '0';
				document.querySelector('.menu1').style.transitionDelay = '0.1s';
				document.querySelector('.menu2').style.transitionDelay = '0.2s';
				document.querySelector('.menu3').style.transitionDelay = '0.3s';
				document.querySelector('.menu4').style.transitionDelay = '0.4s';
				document.querySelector('.menu5').style.transitionDelay = '0.5s';
				document.querySelector('.menu11').style.transitionDelay = '0.6s';

				document.querySelector('.line8').style.width = '30px';
				document.querySelector('.line7').style.width = '30px';
				document.querySelector('.line6').style.width = '30px';
				document.querySelector('.line6').style.transitionDelay = '0.6s';
				document.querySelector('.line7').style.transitionDelay = '0.7s';
				document.querySelector('.line8').style.transitionDelay = '0.8s';
				document.querySelector('.line9').style.width = '0';
				document.querySelector('.line10').style.width = '0';
				document.querySelector('.menu6').style.opacity = '0';
				document.querySelector('.menu7').style.opacity = '0';
				document.querySelector('.menu8').style.opacity = '0';
				document.querySelector('.menu9').style.opacity = '0';
				document.querySelector('.menu10').style.opacity = '0';
				document.querySelector('.menu12').style.opacity = '0';
				document.querySelector('.menu6').style.transitionDelay = '0.1s';
				document.querySelector('.menu7').style.transitionDelay = '0.2s';
				document.querySelector('.menu8').style.transitionDelay = '0.3s';
				document.querySelector('.menu9').style.transitionDelay = '0.4s';
				document.querySelector('.menu10').style.transitionDelay = '0.5s';
				document.querySelector('.menu12').style.transitionDelay = '0.6s';
				return;
			}
		});


		var menu2 = document.querySelector('#hamburger2');
		var toggle2 = false;
		menu2.addEventListener('click', function(){
			if(!toggle2){
				toggle2 = true;
				document.querySelector('.line8').style.width = '0';
				document.querySelector('.line7').style.width = '0';
				document.querySelector('.line6').style.width = '0';
				document.querySelector('.line6').style.transitionDelay = '0.3s';
				document.querySelector('.line7').style.transitionDelay = '0.2s';
				document.querySelector('.line8').style.transitionDelay = '0.1s';
				document.querySelector('.line9').style.width = '30px';
				document.querySelector('.line10').style.width = '30px';
				document.querySelector('.line9').style.transitionDelay = '0.4s';
				document.querySelector('.line10').style.transitionDelay = '0.5s';
				document.querySelector('.menu6').style.opacity = '1';
				document.querySelector('.menu7').style.opacity = '1';
				document.querySelector('.menu8').style.opacity = '1';
				document.querySelector('.menu9').style.opacity = '1';
				document.querySelector('.menu10').style.opacity = '1';
				document.querySelector('.menu12').style.opacity = '1';
				document.querySelector('.menu6').style.transitionDelay = '0.9s';
				document.querySelector('.menu7').style.transitionDelay = '0.8s';
				document.querySelector('.menu8').style.transitionDelay = '0.7s';
				document.querySelector('.menu9').style.transitionDelay = '0.6s';
				document.querySelector('.menu10').style.transitionDelay = '0.5s';
				document.querySelector('.menu12').style.transitionDelay = '0.4s';

				document.querySelector('.line3').style.width = '0';
				document.querySelector('.line2').style.width = '0';
				document.querySelector('.line1').style.width = '0';
				document.querySelector('.line1').style.transitionDelay = '0.3s';
				document.querySelector('.line2').style.transitionDelay = '0.2s';
				document.querySelector('.line3').style.transitionDelay = '0.1s';
				document.querySelector('.line4').style.width = '30px';
				document.querySelector('.line5').style.width = '30px';
				document.querySelector('.line4').style.transitionDelay = '0.4s';
				document.querySelector('.line5').style.transitionDelay = '0.5s';
				document.querySelector('.menu1').style.opacity = '1';
				document.querySelector('.menu2').style.opacity = '1';
				document.querySelector('.menu3').style.opacity = '1';
				document.querySelector('.menu4').style.opacity = '1';
				document.querySelector('.menu5').style.opacity = '1';
				document.querySelector('.menu11').style.opacity = '1';
				document.querySelector('.menu1').style.transitionDelay = '0.9s';
				document.querySelector('.menu2').style.transitionDelay = '0.8s';
				document.querySelector('.menu3').style.transitionDelay = '0.7s';
				document.querySelector('.menu4').style.transitionDelay = '0.6s';
				document.querySelector('.menu5').style.transitionDelay = '0.5s';
				document.querySelector('.menu11').style.transitionDelay = '0.4s';
				return;
			}
			
			if(toggle2){
				toggle2 = false;
				document.querySelector('.line8').style.width = '30px';
				document.querySelector('.line7').style.width = '30px';
				document.querySelector('.line6').style.width = '30px';
				document.querySelector('.line6').style.transitionDelay = '0.6s';
				document.querySelector('.line7').style.transitionDelay = '0.7s';
				document.querySelector('.line8').style.transitionDelay = '0.8s';
				document.querySelector('.line9').style.width = '0';
				document.querySelector('.line10').style.width = '0';
				document.querySelector('.menu6').style.opacity = '0';
				document.querySelector('.menu7').style.opacity = '0';
				document.querySelector('.menu8').style.opacity = '0';
				document.querySelector('.menu9').style.opacity = '0';
				document.querySelector('.menu10').style.opacity = '0';
				document.querySelector('.menu12').style.opacity = '0';
				document.querySelector('.menu6').style.transitionDelay = '0.1s';
				document.querySelector('.menu7').style.transitionDelay = '0.2s';
				document.querySelector('.menu8').style.transitionDelay = '0.3s';
				document.querySelector('.menu9').style.transitionDelay = '0.4s';
				document.querySelector('.menu10').style.transitionDelay = '0.5s';
				document.querySelector('.menu12').style.transitionDelay = '0.6s';

				document.querySelector('.line3').style.width = '30px';
				document.querySelector('.line2').style.width = '30px';
				document.querySelector('.line1').style.width = '30px';
				document.querySelector('.line1').style.transitionDelay = '0.6s';
				document.querySelector('.line2').style.transitionDelay = '0.7s';
				document.querySelector('.line3').style.transitionDelay = '0.8s';
				document.querySelector('.line4').style.width = '0';
				document.querySelector('.line5').style.width = '0';
				document.querySelector('.menu1').style.opacity = '0';
				document.querySelector('.menu2').style.opacity = '0';
				document.querySelector('.menu3').style.opacity = '0';
				document.querySelector('.menu4').style.opacity = '0';
				document.querySelector('.menu5').style.opacity = '0';
				document.querySelector('.menu11').style.opacity = '0';
				document.querySelector('.menu1').style.transitionDelay = '0.1s';
				document.querySelector('.menu2').style.transitionDelay = '0.2s';
				document.querySelector('.menu3').style.transitionDelay = '0.3s';
				document.querySelector('.menu4').style.transitionDelay = '0.4s';
				document.querySelector('.menu5').style.transitionDelay = '0.5s';
				document.querySelector('.menu11').style.transitionDelay = '0.6s';
				return;
			}
		});


		// $(document).ready(function() {

		// 	$('.owl-carousel1').owlCarousel({
		// 	    loop:true,
		// 	    nav:false,
		// 	    autoplay:true,
		// 	    autoplayTimeout:5000,
		// 	    autoplaySpeed:2000,
		// 	    dots:false,
		// 	    responsive:{
		// 	        0:{
		// 	            items:1
		// 	        },
		// 	        600:{
		// 	            items:1
		// 	        },
		// 	        1000:{
		// 	            items:1
		// 	        }
		// 	    }
		// 	})

		// 		$('.owl-carousel2').owlCarousel({
		// 	    loop:true,
		// 	    margin:10,
		// 	    autoplay:true,
		// 	    autoplayTimeout:3000,
		// 	    autoplaySpeed:500,
		// 	    mouseDrag:false,
		// 	    nav:true,
		// 	    responsive:{
		// 	        0:{
		// 	            items:1
		// 	        },
		// 	        600:{
		// 	            items:2
		// 	        },
		// 	        1000:{
		// 	            items:3
		// 	        }
		// 	    }
		// 	})

		// });

		window.addEventListener('scroll', function(){
			var scr = window.pageYOffset;
			if(scr > 150){
					document.querySelector('#stickyheader').style.height = '91px';
					document.querySelector('.header-content .container').style.opacity = '0';
			 } else {
				document.querySelector('#stickyheader').style.height = '0';
				document.querySelector('.header-content .container').style.opacity = '1';
			}
			console.log(scr);
		});

		function loader(){
			document.querySelector('.loader').style.display = 'none'; 
		}

		setTimeout('loader()', 500);