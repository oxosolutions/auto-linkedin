$(document).ready(function(){
     var htmlContent = `
	 <div class="auto-link-sidebar">
		<div class="auto-linkedin-group">
			<h3 class="auto-linkedin-title" title="Manage invitations">
			Manage invitations
			<a href="https://www.linkedin.com/mynetwork/invitation-manager/">GO</a>
			</h3>
			
			<h4 class="auto-linkedin-title" title="Manage invitations">
			Received
			<a href="https://www.linkedin.com/mynetwork/invitation-manager/">GO</a>
			</h4>
			<button class="auto-linkedin-button auto-linkedin-invitation-manager-ignore">Ignore</button>
			<button class="auto-linkedin-button auto-linkedin-invitation-manager-accept">Accept</button>
			<h4 class="auto-linkedin-title" title="Manage invitations">
			Sent
			<a href="https://www.linkedin.com/mynetwork/invitation-manager/sent/">GO</a>
			</h4>
			<button class="auto-linkedin-button auto-linkedin-invitation-manager-withdraw">Withdraw</button>
		</div>
		
		<button class="auto-linkedin-button auto-linkedin-connect">Connect</button>
		<button class="auto-linkedin-button auto-linkedin-connect-searched">Connect Searched</button>
		<button class="auto-linkedin-button auto-linkedin-send-message">Send Message</button>
	</div>

	<style type="text/css">
	.application-outlet {
		margin-left: 120px;
	}
	.auto-link-sidebar {
		width: 120px;
		height: 100%;
		position: fixed;
		top: 52px;
		left: 0;
		background-color: #283e4a;
		z-index: 999;
	}
	.auto-linkedin-button{
		background-color: #ffffff;
		color: #0084bf;
		padding: 8px 6px;
		margin: 10px auto 10px auto;
		width: 90%;
		display: block;
		font-size: 16px;
		line-height: 22px;
		-webkit-transition: all 200ms ease-in-out;
		-moz-transition: all 200ms ease-in-out;
		-o-transition: all 200ms ease-in-out;
		transition: all 200ms ease-in-out;
	}
	.auto-linkedin-button:hover{
		background-color: #0077b5;
		color: #ffffff;
	}
	</style>`;
	mn-invitation-list
	
	$('body').append(htmlContent);
	
	//Ignore
	$('.auto-linkedin-invitation-manager-ignore').click(function(){
		var invitation_manager_ignore = setInterval(function(){
			var items = $('.mn-invitation-list .button-tertiary-medium-muted');
			if(items.length == 0){
				clearInterval(invitation_manager_ignore);
			}else{
				items.each(function(){
					$(this).click();
				});
			}
		},5000);
	});
	//Accept
	$('.auto-linkedin-invitation-manager-accept').click(function(){
		var invitation_manager_accept = setInterval(function(){
			var items = $('.mn-invitation-list .button-secondary-medium');
			if(items.length == 0){
				clearInterval(invitation_manager_accept);
			}else{
				items.each(function(){
					$(this).click();
				});
			}
		},5000);
	});
	//Withdraw
	$('.auto-linkedin-invitation-manager-withdraw').click(function(){
		var invitation_manager_withdraw = setInterval(function(){
			var items = $('.mn-invitation-list .button-tertiary-medium-muted');
			if(items.length == 0){
				clearInterval(invitation_manager_withdraw);
			}else{
				items.each(function(){
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
	  
	var buttonsLength = $('.search-result__occluded-item').length;
	var index = 1;
	function clickEvent(){
		console.log(index);
		$('.send-invite__actions .button-primary-large').click();
		$('.search-result__occluded-item:nth-child('+index+')').find('.search-result__actions--primary').click();
		setTimeout(function(){
			
			$('.send-invite__actions .button-primary-large').click();
			
			if(index <= buttonsLength){
				index++;
				clickEvent();
			}else{
			   $('.next').click();
			   index = 1;
		           clickEvent();
			}
		},5000);
	}
	clickEvent();
     });
     
     $('.auto-linkedin-send-message').click(function(){
	     console.log($('.msg-conversation-listitem').length);
	     $('.msg-conversation-listitem').each(function(){
		     $(this).find('a').click();
		     console.log($(this).find('a').attr('href'));
		     $(this).click();
		     console.log('Each');
// 		     $('.msg-compose-form__message-text').val('Hello');
// 		     var press = jQuery.Event("keypress");
// 		     press.ctrlKey = false;
// 		     press.which = 13;
// 		     $('.msg-compose-form__message-text').trigger(press);
// 		     var n = $('.msg-conversations-container__conversations-list').height();
//     		     $('.msg-conversations-container__conversations-list').animate({ scrollTop: n }, 0);
	     });
     });
});
