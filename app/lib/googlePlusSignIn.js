var helper = (function() {
    var BASE_API_PATH = 'plus/v1/';

    return {
        /**
         * Hides the sign in button and starts the post-authorization operations.
         *
         * @param {Object} authResult An Object which contains the access token and
         *   other authentication information.
         */
        onSignInCallback: function(authResult) {
            gapi.client.load('plus', 'v1', function() {
                var scope = angular.element($("#loginPanel")).scope();

                if (authResult['access_token']) {

                    //get the user profile
                    var requestProfile = gapi.client.plus.people.get({'userId': 'me'});
                    requestProfile.execute(function(profile) {

                        scope.$apply(function() {
                            if (scope.isRegistered(profile.id)) {
                                scope.initAgent();
                                window.location = "index.html";
                            }
                            else
                            {
                                scope.signedIn = true;
                                scope.player.name = profile.displayName;
                                scope.player.id = profile.id;
                            }
                        });
                    });

                } else if (authResult['error']) {
                    // There was an error, which means the user is not signed in.
                    // As an example, you can handle by writing to the console:
                    //console.log('There was an error: ' + authResult['error']);          
                    scope.$apply(function() {
                        scope.signedIn = false;
                    });
                }
            });
        },
        
        getProfile: function(){
           var requestProfile = gapi.client.plus.people.get({'userId': 'me'});
           requestProfile.execute(function(profile) {
              console.log(profile); 
           });      
        },
        /**
         * Calls the OAuth2 endpoint to disconnect the app for the user.
         */
        disconnect: function() {
            // Revoke the access token.
            $.ajax({
                type: 'GET',
                url: 'https://accounts.google.com/o/oauth2/revoke?token=' +
                        gapi.auth.getToken().access_token,
                async: false,
                contentType: 'application/json',
                dataType: 'jsonp',
                success: function(result) {
                    console.log('revoke response: ' + result);
                   // $('#gConnect').show();
                },
                error: function(e) {
                    console.log(e);
                }
            });
        }
    };
})();

/**
 * jQuery initialization
 */
$(document).ready(function() {
    /*$('#disconnect').click(helper.disconnect);
     $('#loaderror').hide();
     if ($('[data-clientid="YOUR_CLIENT_ID"]').length > 0) {
     alert('This sample requires your OAuth credentials (client ID) ' +
     'from the Google APIs console:\n' +
     '    https://code.google.com/apis/console/#:access\n\n' +
     'Find and replace YOUR_CLIENT_ID with your client ID.'
     );
     }*/
});

/**
 * Calls the helper method that handles the authentication flow.
 *
 * @param {Object} authResult An Object which contains the access token and
 *   other authentication information.
 */
function onSignInGPlusCallback(authResult) {

    helper.onSignInCallback(authResult);
}
