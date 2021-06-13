 AOS.init({
 	duration: 1000,
 	delay: 400,
 	offset:200
 });


 let tl = gsap.timeline({ default: {ease: "power.out1"}});

 tl.to('.letter', {fontSize: '4rem', opacity: '1', duration: 0.5, stagger: '0.1'}).delay(1);
 tl.to('.hello', {height: '0vh', duration: 0.1});
  tl.to('.overlay', {height: '0vh', duration: 0.5}, '+=0.5');
  tl.to('body', {overflowY: 'scroll', duration: 0.5});




window.addEventListener('scroll', function(e){

	 let page = window.pageYOffset;

	 if(page > 0){
	 	document.querySelector('.scrolling-navbar').style.top = '0';
	 	document.querySelector('.introduction').style.marginTop = page+'px';
	 	document.querySelector('.introduction').style.opacity = page+'px';


	 } else {
	 	document.querySelector('.scrolling-navbar').style.top = '-10vh';
	 	document.querySelector('.introduction').style.marginTop = page+'px';
	 }

	 document.querySelector('.intro').style.opacity = 1 - window.scrollY / 700;



});

	
	document.querySelector('.hamburger').addEventListener('click', () => {

		document.querySelector('.sidenav').style.width = '60%';

	});

	document.querySelector('.close').addEventListener('click', () => {

		document.querySelector('.sidenav').style.width = '0';

	});


	setTimeout(function(){
		document.querySelector('.overlay .hello').style.height = '100vh';
		document.querySelector('.overlay .hello').style.width = '100%';
		document.querySelector('.overlay .hello').style.transition = '0.5s';
	}, 800);

	





