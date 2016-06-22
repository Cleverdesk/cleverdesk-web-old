frontendApp.factory('auth', function($http) {
    return {
        auth: function(username, password) {
            return new Promise(function(resolve, reject) {
                $http({
                    method: 'POST',
                    url: '/backend/auth',
                    data: {"username": username, 'password': password, 'lifetime': 86400}
                }).then(function successCallback(response) {
                    if(response.data.status == 200) {
                        sessionStorage.setItem('token', response.data.body);
                        resolve('Success (200)');
                    } else {
                        reject("Non 200 Status ("+response.data.status+")");
                    }
                }, function errorCallback(response) {
                    reject("Error ("+response.status+")");
                });
            });
        },
        getToken: function() {
            return sessionStorage.getItem('token')
        }
    }
});