frontendApp.factory('communicator', function($http) {
   return {
       getPages: function() {
           return new Promise(function(resolve, reject) {
               $http({
                   method: 'GET',
                   url: '/backend/pages'
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
               $http({
                   method: 'GET',
                   url: '/backend/' + plugin + '/' + page
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