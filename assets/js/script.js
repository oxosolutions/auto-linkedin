$(document).ready(function(){
     var htmlContent = `<div class="sidebar">
	<button class="withdraw">Withdraw</button>
	<button class="connect">Connect</button>
</div>

<style type="text/css">
	.sidebar{
		width: 4%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: red;
	}
</style>`;
     $('body').append(htmlContent);
});
