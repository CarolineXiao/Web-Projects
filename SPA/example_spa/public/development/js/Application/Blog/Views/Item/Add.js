/**
 * Created by tcao on 06/09/2017.
 */
define([
    'marionette',
    'underscore',
    'Class/Vent',
    'Blog/Services/Blog',
    'hbs!Blog/Templates/AddBlog'
], function (Marionette, _, Vent, BlogService, AddTemplate) {
    'use strict';

    return Marionette.ItemView.extend({

        tagName: 'div',

        template: AddTemplate,

        ui: {
            'btnSubmit': '#btnSubmit',
            'btnCancel': '#btnCancel'
        },

        events: {
            'click @ui.btnSubmit': 'submitButtonCallback',
            'click @ui.btnCancel': 'cancelButtonCallback'
        },

        initialize: function () {

        },

        onRender: function(){

        },

        submitButtonCallback: function(e) {
            e.preventDefault();
            alert('Are you sure you want to submit?');

            var email = document.getElementById('email').value;
            var comment = document.getElementById('comment').value;
            var blogService = new BlogService();
            blogService.addBlogPost(email, comment, function (response) {
                if(response.code == '204'){
                    document.getElementById("successMessage").style.visibility = "visible";
                    document.getElementById("failMessage").style.visibility = "hidden";
                }else if(response.code == '400'){
                    document.getElementById("failMessage").style.visibility = "visible";
                    document.getElementById("successMessage").style.visibility = "hidden";
                }
            },this);

        },

        cancelButtonCallback: function() {
            GLOBAL.Blog.router.navigate('post', {
                trigger: true,
                replace: true
            })
        }
    });
});