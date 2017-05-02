$(document).ready(function(){
     var htmlContent = `<div class="auto-link-sidebar">
	<button class="auto-linkedin-withdraw">Withdraw</button>
	<button class="auto-linkedin-connect">Connect</button>
	<button class="auto-linkedin-connect-searched">Connect Searched</button>
</div>

<style type="text/css">
	.auto-link-sidebar{
		width: 4%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		background-color: red;
		z-index: 999;
	}
        .auto-linkedin-withdraw, .auto-linkedin-connect, .auto-linkedin-connect-searched{
		background-color: #e4e4e4;
		color: #000;
		padding: 10px;
		margin-top: 15%;
	}
</style>`;
     $('body').append(htmlContent);
     $('.auto-linkedin-withdraw').click(function(){
	var loopInterval = setInterval(function(){
		var allElements = $('.mn-person-card__person-btn-ext').length;
		if(allElements == 0){
			clearInterval(loopInterval);
		}else{
			$('.mn-person-card__person-btn-ext').each(function(){
				$(this).click();
			});
		}
	},5000);
     });
     $('.auto-linkedin-connect').click(function(){
	   var connectInterval = setInterval(function(){
		var allElements = $('.mn-pymk-list .mn-person-card__person-btn-ext').length;
		if(allElements == 0){
			clearInterval(connectInterval);
		}else{
			$('.mn-pymk-list .mn-person-card__person-btn-ext').each(function(){
				var elem = $(this);
				var n = $(document).height();
    				$('html, body').animate({ scrollTop: n }, 0);
				elem.click();
			});
		}
	   },5000);  
     });
     $('.auto-linkedin-connect-searched').click(function(){
	   var connectSearchedInterval = setInterval(function(){
		var allElements = $('.ember-view .search-result__actions--primary').length;
		if(allElements == 0){
			clearInterval(connectSearchedInterval);
		}else{
			$('.ember-view .search-result__actions--primary').each(function(i){
				var elem = $(this);
				elem.click();
				setTimeout(function(){
					try{
						$('.send-invite__actions .button-primary-large').click();
					}catch(e){
					}
					var n = $(document).height();
					$('html, body').animate({ scrollTop: n }, 0);
				},i * 5000);				
			}).promise().done(function () {
				$('.next').click();
			});
		}
	   },5000); 
     });
});
