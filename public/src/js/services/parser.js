frontendApp.factory('parser', function($sce) {
    return {
        parsePage: function(page) {
            return new Promise(function(resolve, reject) {
                var html = "";
                var components = page.components;
                angular.forEach(components, function(component) {
                    if(component.name === "Label") {
                        html += '<p>' + component.text + '</p>';
                    } else {
                        html += '<p>Component not supported yet :(</p>'
                    }
                });
                resolve($sce.trustAs($sce.HTML, html));
            });
        }
    }
});