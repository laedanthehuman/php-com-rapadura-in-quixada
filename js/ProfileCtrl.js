class ProfileCtrl {


    checkLogin() {
        loginCtrl.isLogged(function (response) {
            if (response.status === 'connected') {
                ProfileView.escondeLogin();
                LocalStorageConversor.setItem('logged', true);
            } else {
                ProfileView.mostraLogin();
                LocalStorageConversor.setItem('logged', false);
            }
        });
    }

    login() {
        loginCtrl.login(function (response) {
            ProfileView.escondeLogin();
            LocalStorageConversor.setItem('logged', true);
            FB.api(
                '/me',
                'GET', {
                    "fields": "id,name,about,age_range,birthday,friends,education,location"
                },
                function (response) {
                    
                }
            );
        });
    }

    logout() {
        loginCtrl.logout(function (response) {
            ProfileView.mostraLogin();
            LocalStorageConversor.setItem('logged', false);
        })
    }
}