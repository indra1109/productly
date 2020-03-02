$(".tempatscroll").click(function(e){
	var tujuan = $(this).attr('href');
	var eTujuan = $(tujuan);

	$("html, body").animate({
		scrollTop : eTujuan.offset().top
	}, 1500, 'easeInOutExpo');

	e.preventDefault();
});

//load windows
$(window).on('load', function(){
	$('.jumbotron .gambar').addClass('muncul');
	$('.jumbotron .texth1').addClass('muncul');
	$('.jumbotron .textp').addClass('muncul');
	$('.jumbotron a').addClass('muncul');

});

//parallax
$(window).scroll(function(){
	var WScroll = $(this).scrollTop();

	//jumborton
	$('.jumbotron img').css({
		'transform' : 'translate(0px, '+ WScroll/4 + '%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px, '+ WScroll/2 + '%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px, '+ WScroll/1.2 + '%)'
	});

	//nav nyangkut
	if(WScroll > $('.header').offset().top ){
		$('.header').addClass('stayOnTop');
	}else if(WScroll < $('.about').offset().top ){
		$('.header').removeClass('stayOnTop');
	}

	//about
	if(WScroll > $('.about').offset().top - 350){
		$('.about .pKiri').each(function(){
			$('.about .pKiri').addClass('pMuncul');
		});

		$('.about .pKanan').each(function(){
			$('.about .pKanan').addClass('pMuncul');
		});
	}else{
		$('.about .pKiri').each(function(){
			$('.about .pKiri').removeClass('pMuncul');
		});

		$('.about .pKanan').each(function(){
			$('.about .pKanan').removeClass('pMuncul');
		});
	}

	//portfolio
	if(WScroll > $('.portfolio').offset().top - 250 ){
		$('.portfolio .card').each(function(i){
			setTimeout(function(){
				$('.portfolio .card').eq(i).addClass('muncul');
			}, 300 * (i+1));
		});
	}else {	
		$('.portfolio .card').each(function(){
			$('.portfolio .card').removeClass('muncul');
		});
	}

	//contact
	if(WScroll > $('.contact').offset().top - 350){
		$('.contact .justify-content-center').each(function(){
			$('.contact .justify-content-center').addClass('muncul');
		});
	}else{
		$('.contact .justify-content-center').each(function(){
			$('.contact .justify-content-center').removeClass('muncul');
		});
	}

});