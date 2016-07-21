frontendApp.factory('parser', function($sce) {
    return {
        parsePage: function(page) {
            return new Promise(function(resolve, reject) {
                var components = page.components;
                resolve(components);
            });
        }
    }
});