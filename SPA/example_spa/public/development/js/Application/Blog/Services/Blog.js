define([
    'marionette',
    'backbone',
    'underscore',
    'Class/Vent',
    'Class/Base',
    'Blog/Services/RestClient',
    'Blog/Models/Post',
    'Blog/Collections/Post'
], function (Marionette, Backbone, _, Vent, Base, RestClient, PostModel, PostCollection) {
    'use strict';

    /**
     * Blog service handles logic such as fetching posts from the API via the 
     * rest client, and publishing the 'blogService:collectionReady' event which
     * lets the BlogLayout know that the collection of posts is ready and it
     * can start rendering the collection of Blog posts.
     */
    return Base.extend(function BlogService() {
        /** Constructor */
    }, {
        
        collection: null,
        
        init: function () {
            _.bindAll(this,
                'createPostCollection',
                'triggerPostCollectionReadyEvent',
                'addBlogPost','editBlogPost');
            
            this.collection = new PostCollection();
            this.restClient = new RestClient();
            this.getBlogPostList();
        },
                
        getBlogPostList: function() {
            var self = this;
            this.restClient.fetchPosts(function(response) {
                self.createPostCollection(response.entries);
            });
        },
                
        createPostCollection: function(posts) {
            var self = this;
            var numberOfPosts = posts.length;

            this.modelAdded = _.after(numberOfPosts, this.triggerPostCollectionReadyEvent);
            
            /** Loop through array of posts and append them to the Post collection*/
            _.each(posts, function(post){
                var postModel = new PostModel(post);
                self.collection.add(postModel);
                self.modelAdded();
            });
        },
                
        triggerPostCollectionReadyEvent: function() {
            Vent.trigger('blogService:collectionReady', this.collection);
        },
        
        addBlogPost: function (email, comment, callback, context) {
            this.restClient = new RestClient();
            this.restClient.addPosts(email,comment,function (data) {
                callback.call(context,data);
                alert("addblogpost!");
            }, this);
        },
        editBlogPost: function (id,callback,context) {
            this.restClient = new RestClient();
            this.restClient.editPost(id,function (data) {
                callback.call(context,data);
                alert("editblogpost!");
            },this);
        }

    });
});
