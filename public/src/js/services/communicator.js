frontendApp.factory('communicator', function($http, auth) {
   return {
       getPages: function() {
           return new Promise(function(resolve, reject) {
               if (typeof host !== 'undefined') {
                   var url = host + 'pages'
               } else {
                   var url = '/backend/pages';
               }
               $http({
                   method: 'GET',
                   url: url,
                   headers: {
                       'token': auth.getToken()
                   }
               }).then(function successCallback(response) {
                   if(response.data.status == 200) {
                        resolve(response.data.body);
                   } else {
                       reject("Non 200 Status ("+response.data.status+")");
                   }
               }, function errorCallback(response) {
                   reject("Error ("+response.status+")");
               });
           });
       },
       getPage: function(plugin, page) {
           return new Promise(function(resolve, reject) {
               if (typeof host !== 'undefined') {
                   var url = host + plugin + '/' + page;
               } else {
                   var url = '/backend/' + plugin + '/' + page;
               }
               $http({
                   method: 'GET',
                   url: url,
                   headers: {
                       'token': auth.getToken()
                   }
               }).then(function successCallback(response) {
                   if (response.data.status == 200) {
                       resolve(response.data.body);
                   } else {
                       reject("Non 200 Status (" + response.data.status + ")");
                   }
               }, function errorCallback(response) {
                   reject("Error ("+response.status+")");
               });
           });
       }
   }
});