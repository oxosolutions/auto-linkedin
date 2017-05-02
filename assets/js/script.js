$(document).ready(function(){
     $.get('html.html', function(result){
          var htmlContent = result;
     });
     $('body').append(htmlContent);
});
