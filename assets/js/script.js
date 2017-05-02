$(document).ready(function(){
     var htmlContent = `<div class="auto-link-sidebar">
	<button class="auto-linkedin-withdraw">Withdraw</button>
	<button class="auto-linkedin-connect">Connect</button>
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
        .auto-linkedin-withdraw, .auto-linkedin-connect{
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
				setTimeout(function(){
					var n = $(document).height();
    					$('html, body').animate({ scrollTop: n }, 0);
					elem.click();
				},500);
			});
		}
	   },5000);  
     });
});
