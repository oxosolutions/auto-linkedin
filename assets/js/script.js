$(document).ready(function(){
     var htmlContent
     $.get('html.html', function(result){
          htmlContent = result;
     });
     $('body').append(htmlContent);
});
