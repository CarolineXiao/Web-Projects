  define([
    'Blog/Application' 
], function (Application) {
    
    var Bootstrap = {};
    
    Bootstrap.init = function() {
        var application = new Application();
        application.start();
    };

    return Bootstrap;
});