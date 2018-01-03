/**
 * Created by tcao on 06/09/2017.
 */
define([
    'marionette',
    'underscore',
    'Class/Vent',
    'hbs!Blog/Templates/EditBlog',
    'Blog/Services/Blog'
], function (Marionette, _, Vent, EditTemplate,BlogService) {
    'use strict';

    return Marionette.ItemView.extend({

        initialize: function (id) {
            this.getEditContent(id);
        },
        tagName: 'div',

        template: EditTemplate,

        ui: {
            'btnSubmit': '#btnSubmit',
            'btnCancel': '#btnCancel'
        },

        events: {
            'click @ui.btnUpdate': 'updateButtonCallback',
            'click @ui.btnCancel': 'cancelButtonCallback'
        },

        onRender: function(){
            //document.getElementById('email').value = data.email;
            //document.getElementById('comment').value = data.comment;
        },

        updateButtonCallback: function() {
            alert('Are you sure you want to submit?');
        },

        cancelButtonCallback: function() {
            GLOBAL.Blog.router.navigate('post', {
                trigger: true,
                replace: true
            })

        },
        getEditContent: function (id) {
            var blogService = new BlogService();
            blogService.editBlogPost(id,function (response) {
              console.log(response);
            },this);
        }

    });
});