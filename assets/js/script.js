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
			chrome.tabs.executeScript(tab.id, {code: `
										var items = document.getElementsByClassName('mn-person-card__person-btn-ext');
										console.log(items.length);
										for(var i = 0; i < items.length; i++){
											items[i].click();
											if(i == items.length){
												var body = document.getElementsByTagName('body');
												body.scrollTop = body.scrollHeight;
												setTimeout(function(){
													items = document.getElementsByClassName('mn-person-card__person-btn-ext');
												},5000);
											}
										}
										`
			});
		});
	});
	
});