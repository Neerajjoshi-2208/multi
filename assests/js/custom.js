$(document).ready(function(){
			$(window).scroll(function(){
				var position = $(this).scrollTop();
				if(position >= 200){
					$('.navbar').addClass('custom-navbar');
					$('.navbar').css({"background-color":"white",  "box-shadow": "0px 2px 15px rgba(0, 0, 0, 0.5)"});
				}
				else{
					$('.navbar').removeClass('custom-navbar');
					$('.navbar').css({"background-color": "transparent",  "box-shadow": "none"});
				}

			});
 
			$('.nav-item').click(function(){
				
				$(this).addClass('active').siblings().removeClass('active');

			});
   		$('.dropdown').on('show.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function(e){
  $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});

			$('.list').click(function(){
				const value = $(this).attr('data-filter');
				if(value == "all"){
					$('.item-box').show('1000');
				}
				else{
					$('.item-box').not('.' + value).hide('1000');
					$('.item-box').filter('.' + value).show('1000');
				}
			});
			
			$('.list').click(function(){
				$(this).addClass('active').siblings().removeClass('active');

			});
});