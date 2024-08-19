document.addEventListener('DOMContentLoaded', function() {
    var googleLoginBtn = document.getElementById('googleLoginBtn');

    if (googleLoginBtn) {
        googleLoginBtn.addEventListener('click', function() {
            var clientId = '390127620174-po5ebtvl5d47421a3qbvss4q6eod0r0s.apps.googleusercontent.com';
            var redirectUri = 'https://cyber.kesug.com/?i=1'; // Use the full redirect URI
            var scope = 'email profile';
            var state = 'some_state_code'; // Optional: Add a state parameter for CSRF protection

            var oauthUrl = 'https://accounts.google.com/o/oauth2/auth?' +
                'response_type=code&' +
                'client_id=' + encodeURIComponent(clientId) + '&' +
                'redirect_uri=' + encodeURIComponent(redirectUri) + '&' +
                'scope=' + encodeURIComponent(scope) + '&' +
                'state=' + encodeURIComponent(state);

            window.location.href = oauthUrl;
            
        });
    }
});
