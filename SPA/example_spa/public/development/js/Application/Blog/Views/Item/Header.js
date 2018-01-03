define([
    'marionette',
    'underscore',
    'Class/Vent',
    'hbs!Blog/Templates/header'
], function (Marionette, _, Vent, headerTemplate) {
    'use strict';

    return Marionette.ItemView.extend({
        
        template: headerTemplate,
                
        ui: {
            'titleLink': '.navbar-brand'
        },
             
        events: {
            'click @ui.titleLink': 'callHeaderLinkCallback'
        },
                
        initialize: function () {
            _.bindAll(this,
                'callHeaderLinkCallback'
            );

        },
                
        callHeaderLinkCallback: function(e) {
            e.preventDefault();
            alert('The title link was clicked');
        }
                
    });
});