// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

// Facebook Authentication Javascript SDK
window.fbAsyncInit = function() {
    FB.init({
            appId      : '199437970167670',
            status     : true, 
            cookie     : true,
            xfbml      : true,
            oauth      : true,
            channelUrl : "//friday-dev.herokuapp.com/channel.html"
    });
  
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
          // connected
        } else if (response.status === 'not_authorized') {
          // not_authorized
          login();
        } else {
          // not_logged_in
          login();
        }
    });
};

// Load the SDK Asynchronously
(function(d){
   var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement('script'); js.id = id; js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   ref.parentNode.insertBefore(js, ref);
 }(document));
 
function login() {
    FB.login(function(response) {
        if (response.authResponse) {
            // connected
            testAPI();
        } else {
            // cancelled
        }
    });
}

function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        console.log('Good to see you, ' + response.name + '.');
    });
}