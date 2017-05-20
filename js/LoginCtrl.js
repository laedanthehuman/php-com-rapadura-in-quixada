class LoginCtrl {

    constructor(isLogged = false) {
        LocalStorageConversor.setItem('logged', isLogged);
    }

    login(loginCallback, permissions) {
        FB.login(function (response) {
            loginCallback(response)
        }, {
            scope: permissions
        });
    }

    logout(logoutCallback) {
        FB.logout(function (response) {
            logoutCallback(response)
        });
    }

    isLogged(statusChangeCallback) {
        let isLogged = LocalStorageConversor.getItem('logged');
        if (!isLogged) {
            FB.getLoginStatus(function (response) {
                statusChangeCallback(response);
            });
        }

    }

}