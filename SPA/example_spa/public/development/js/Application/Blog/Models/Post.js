define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var PostModel = Backbone.Model.extend({
        
        defaults: {
            id: null,
            comment: null,
            email: null,
            created: null
        }
        
    });
    
    return PostModel;
});