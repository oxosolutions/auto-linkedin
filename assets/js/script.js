chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    		window.url = tabs[0].url;
			
		});
$(document).ready(function(e) {
	
	
	$('body').on('click','#linkedin_console', function(){
		var json = window.res;
		var selectedAccount = $(this).val();
		var tab;
		chrome.tabs.query({
			active: true,
			lastFocusedWindow: true
		},
		function(array_of_Tabs) {
			tab = array_of_Tabs[0];
			chrome.tabs.executeScript(tab.id, {code: "console.log('HELLO CONSOLE')"});
		});
	});

	$( "#withdraw_all_invitations" ).click(function() {
		var tab;
		chrome.tabs.query({
			active: true,
			lastFocusedWindow: true
		},
		function(array_of_Tabs) {
			tab = array_of_Tabs[0];
			//chrome.tabs.executeScript(tab.id, {code: "console.log('HELLO CONSOLE');var items = document.getElementsByClassName('mn-person-card__person-btn-ext');for(var i =0; i < items.length; i++) { items[i].click();}"});
			chrome.tabs.executeScript(tab.id, {code: "var scroll_loop  = null;scroll_loop = setInterval(function() {jQuery(document).scrollTop(jQuery(document).height());var items = document.getElementsByClassName('mn-person-card__person-btn-ext');if(items.length > 100){ for(var i =0; i < items.length; i++) { items[i].click();items = [];}}if(items.length > 1000){clearInterval(scroll_loop);}console.log( 'Total People = ' + items.length);}, 1600);"});
		});
	});
	
});