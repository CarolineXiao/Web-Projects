define([
    'marionette',
    'Blog/Views/Item/Add',
    'Blog/Views/Item/Edit'

], function (Marionette,AddItemView, EditItemView) {
    'use strict';

    /**
     * Application Routing Interface.
     */
    return Marionette.AppRouter.extend({
        routes: {
            '': 'posts',
            'add': 'add',
            'edit/:id': 'edit'
        },

        /**
         * @description Route for posts page (default)
         */
        posts: function () {

        },

        /**
         * @description Route for Add post page
         */
        add: function () {
            var addView = new AddItemView();
            window.GLOBAL.Blog.applicationRegion.show(addView);

        },
        /**
         * @description Route for Edit post page
         */
        edit: function (id) {
            window.GLOBAL.Blog.applicationRegion.show(new EditItemView({
                id : id
                }
            ));
        }

    });
});
