define([
    'marionette',
    'backbone',
    'underscore',
    'Class/Vent',
    'Class/Base',
    'Blog/Router',
    'Blog/Services/Blog',
    'Blog/Views/Layout/Blog'
], function (Marionette, Backbone, _, Vent, Base, Router, BlogService, BlogLayoutView) {
    'use strict';

    return Base.extend(function Application() {
        /** Constructor */
    }, {
        start: function () {

            var Blog = new Marionette.Application();

            Blog.addRegions({
                applicationRegion: '#application'
            });

            Blog.addInitializer(function(options){
                var blogLayout = new BlogLayoutView();
                Blog.applicationRegion.show(blogLayout);
            });

            Blog.addInitializer(function () {
                Blog.router = new Router();
            });

            Blog.on('initialize:after', function () {
                if (Backbone.history) {
                    Backbone.history.start();
                }
            });
            
            /** Attach Blog instance to the global JS object so you can easily 
             * access it in other locations of the application. Do not do this
             * for anything else unless if absolutely necessary. */
            GLOBAL.Blog = Blog;

            Blog.start();
            
            var blogService = new BlogService();
            blogService.init();
        }
        
    });
});
