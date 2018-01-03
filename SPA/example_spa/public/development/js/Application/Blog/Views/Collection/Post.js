define([
    'marionette',
    'underscore',
    'Class/Vent',
    'Blog/Views/Composite/Post'
], function (Marionette, _, Vent, CompositeView) {
    'use strict';

    return Marionette.CollectionView.extend({

        tagName: 'tbody',
                     
        itemView: CompositeView,
              
        initialize: function (options) {
            console.log(this.collection);
        },

        onRender: function () {
            console.log('CollectionView is rendered');
        },
                
        onClose: function () {
            console.log('CollectionView is closed');
        }
                
    });
});