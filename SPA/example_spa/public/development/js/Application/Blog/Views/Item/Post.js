define([
    'marionette',
    'underscore',
    'Class/Vent',
    'hbs!Blog/Templates/post'
], function (Marionette, _, Vent, postTemplate) {
    'use strict';

    return Marionette.ItemView.extend({
        
        tagName: 'tr',
                
        template: postTemplate,
                
        ui: {
            'btnEdit': '.btn-edit',
            'btnDelete': '.btn-delete'
        },
            
        events: {
            'click @ui.btnEdit': 'editButtonCallback',
            'click @ui.deleteEdit': 'deleteButtonCallback'
        },
             
        initialize: function () {
            
        },
                
        onRender: function(){
            console.log(this.model);
        },
                     
        editButtonCallback: function() {
            GLOBAL.Blog.router.navigate('edit/' + this.model.get('id'), {
                trigger: true, 
                replace: true
            });
        },
                
        deleteButtonCallback: function() {
            alert('Edit button clciked');
        }
     
    });
});