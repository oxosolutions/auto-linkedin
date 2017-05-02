$(document).ready(function(){
     var htmlContent
     $.get('https://rawgit.com/oxosolutions/auto-linkedin/master/assets/js/html.html', function(result){
          htmlContent = result;
     });
     $('body').append(htmlContent);
});
