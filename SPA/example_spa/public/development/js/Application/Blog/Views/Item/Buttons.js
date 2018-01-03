define([
    'marionette',
    'underscore',
    'Class/Vent',
    'hbs!Blog/Templates/buttons'
], function (Marionette, _, Vent, buttonsTemplate) {
    'use strict';

    return Marionette.ItemView.extend({
        
        tagName: 'div',
                
        template: buttonsTemplate,
                
        ui: {
            'btnAdd': '.btn-add-new'
        },
            
        events: {
            'click @ui.btnAdd': 'addButtonCallback'
        },
             
        initialize: function () {
            
        },
                
        onRender: function(){

        },
                     
        addButtonCallback: function() {
            GLOBAL.Blog.router.navigate('add', {
                trigger: true, 
                replace: true
            });
        }
     
    });
});


