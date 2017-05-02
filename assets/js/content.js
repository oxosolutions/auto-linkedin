document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var script = document.createElement( 'script' );
var code = document.createElement( 'script' );

//append all elements
document.body.appendChild( script );
document.body.appendChild( code );

script.src = 'https://code.jquery.com/jquery-3.2.1.min.js'; 
code.src = 'https://cdn.rawgit.com/oxosolutions/auto-linkedin/bafb9a12/assets/js/script.js';
