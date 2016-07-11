frontendApp.factory('parser', function($sce) {
    return {
        parsePage: function(page) {
            return new Promise(function(resolve, reject) {
                page = JSON.parse(page);
                var components = page.components;
                resolve(components);
            });
        }
    }
});