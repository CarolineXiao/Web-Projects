define([
    'marionette',
    'backbone',
    'underscore',
    'Class/Vent',
    'Blog/Views/Item/Header',
    'Blog/Views/Item/Buttons',
    'Blog/Views/Composite/Post',
    'hbs!Blog/Templates/blog'
], function (Marionette, Backbone, _, Vent, HeaderView, ButtonsView, CompositePostView, blogTemplate) {
    'use strict';

    return Marionette.Layout.extend({
        
        template: blogTemplate,
                
        regions: {
            'header': '#header',
            'buttons': '#buttons',
            'main': '#main',
            'footer': '#footer'
        },

        initialize: function () {
            _.bindAll(this,
                'loadPosts');
                
            Vent.on('blogService:collectionReady', this.loadPosts);
        },

        onRender: function () {
            var headerView = new HeaderView();
            var buttonsView = new ButtonsView();
            this.header.show(headerView);
            this.buttons.show(buttonsView);
        },
                
        loadPosts: function(postCollection) {
            var postsView = new CompositePostView({collection: postCollection});
            this.main.show(postsView);
        }
                
    });
});