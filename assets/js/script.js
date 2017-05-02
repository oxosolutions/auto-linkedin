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
		background-color: #949494;
		color: #000;
		padding: 10px;
	}
</style>`;
     $('body').append(htmlContent);
});
