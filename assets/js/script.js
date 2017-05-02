$(document).ready(function(){
     var htmlContent = `<div class="auto-link-sidebar">
	<button class="withdraw">Withdraw</button>
	<button class="connect">Connect</button>
</div>

<style type="text/css">
	.auto-link-sidebar{
		width: 4%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: red;
		z-index: 999;
	}
        .connect, .withdraw{
		background-color: #e4e4e4;
		color: #000;
		padding: 10px;
		margin-top: 15%;
	}
</style>`;
     $('body').append(htmlContent);
     $('.withdraw').click(function(){
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
});
