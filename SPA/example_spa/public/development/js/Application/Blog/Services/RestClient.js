define([
    'jquery',
    'underscore',
    'Class/Base'
], function ($, _, Base) {
    'use strict';

    /**
     * RestClient
     * @desc The purpose of this class is to manage the server calls. 
     * All information about the api to the server will be stored here.
     */
    return Base.extend(function RestClient(options) {
        /** Constructor */
    }, {
        /**
         * Fetch list of posts
         * @param {function} callback
         * @param {object} context
         */
        fetchPosts: function (callback, context) {
            var FETCH_POSTS_URL = '/api';
            $.get(FETCH_POSTS_URL, function(data) {
                callback.call(context, data);
            });
        },

        addPosts: function (email, comment, callback, context) {
            var ADD_POSTS_URL = '/api/post';
            $.post(ADD_POSTS_URL, {email: email, comment: comment}).done(function(data) {
                callback.call(context, data);
            });


        },
        editPost: function (id,callback,context) {
            var EDIT_POST_URL = '/api/get/id/'+id;
            $.get(EDIT_POST_URL,{id: id}).done(function (data) {
                callback.call(context,data);
                console.log(data);
            });
        },
        updatePost: function (id,email, comment, callback, context) {
            var UPDATE_POST_URL = '/api/delete/id/' + id;
            $.post(UPDATE_POST_URL, {email: email,comment: comment}).done(function (data) {

            })
        }

    });
});