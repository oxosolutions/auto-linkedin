document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var btnForm = document.createElement( 'form' );
var btn = document.createElement( 'input' );
var btnConnect = document.createElement( 'input' );
var script = document.createElement( 'script' );
var code = document.createElement( 'script' );

//append all elements
document.body.appendChild( div );
document.body.appendChild( script );
document.body.appendChild( code );
div.appendChild( btn );
div.appendChild( btnConnect );
script.src = 'https://code.jquery.com/jquery-3.2.1.min.js';
code.src = 'https://makemyfolio.com/assets/script.js';
//set attributes for div
div.id = 'myDivId';
div.style.position = 'fixed';
div.style.top = '0%';
div.style.left = '0%';
div.style.width = '4%';   
div.style.height = '100%';
div.style['z-index'] = '999';
div.style.backgroundColor = 'red';

//set attributes for btnForm
btnForm.action = '';

//set attributes for btn
//"btn.removeAttribute( 'style' );
btn.type = 'button';
btn.value = 'Withdraw';
btn.style.position = 'absolute';
btn.style.top = '0%';
btn.style.left = '0%';
btn.onclick = function(){
	var loopInterval = setInterval(function(){
		var items = document.getElementsByClassName('mn-person-card__person-btn-ext');
		if(items.length == 0){
			clearInterval(loopInterval);
		}
		console.log(items.length);
		for(var i = 0; i < items.length; i++){
			items[i].click();
		}
	},5000);
}

btnConnect.type = 'button';
btnConnect.value = 'Connect';
btnConnect.style.position = 'absolute';
btnConnect.style.top = '10%';
btnConnect.style.left = '0%';
btnConnect.onclick = function(){
	var loopInterval = setInterval(function(){
		var items = document.getElementsByClassName('mn-person-card__person-btn-ext');
		if(items.length == 0){
			clearInterval(loopInterval);
		}
		console.log(items.length);
		for(var i = 0; i < items.length; i++){
			items[i].click();
		}
	},5000);
}
