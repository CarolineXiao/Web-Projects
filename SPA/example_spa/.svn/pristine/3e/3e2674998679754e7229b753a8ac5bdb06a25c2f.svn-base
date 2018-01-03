
requirejs.config({
    baseUrl: baseUrl,
    paths: {
        'vendor': 'vendor',
        'jquery': 'vendor/jquery/js/jquery-1.10.2',
        'jstree': 'vendor/jquery/jstree/jquery.jstree',
        'Handlebars': 'vendor/lib/handlebars',
        'underscore': 'vendor/lib/underscore',
        'json2': 'vendor/lib/json2',
        'Jed': 'vendor/jed/jed',
        'tpl': 'vendor/requirejs/tpl',
        'backbone': 'vendor/backbone/backbone',
        'backboneBabysitter': 'vendor/backbone/backbone.babysitter',
        'backboneFetch': 'vendor/backbone/backbone.fetch-cache',
        'backbonePaginator': 'vendor/backbone/backbone.paginator',
        'backboneWreqr': 'vendor/backbone/backbone.wreqr',
        'marionette': 'vendor/backbone/backbone.marionette',
        'i18nprecompile': 'vendor/lib/i18nprecompile',
        'hbs': 'vendor/requirejs/hbs',
        'css': 'vendor/require-css/css',
        'text': 'vendor/requirejs/text',
        'json': 'vendor/requirejs/json',
        'sinon': 'vendor/qunit/sinon-1.7.3',
        'domReady': 'vendor/lib/domReady',
        'FastClick' : 'vendor/lib/fastclick',
        'vent': 'js/Class/Vent',
        'Class': 'js/Class',
        'Blog': 'js/Application/Blog'
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'Handlebars': {
            exports: 'Handlebars'
        },
        'Jed': {
            exports: 'Jed'
        },
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        'backboneWreqr': {
            deps: ['backbone'],
            exports: 'Backbone.Wreqr'
        },
        'marionette': {
            deps: ['underscore', 'backbone'],
            exports: 'Backbone.Marionette'
        },
        'sinon': {
            exports: 'sinon'
        },
        'domReady': {
            exports: 'domReady'
        },
        'hljs': {
            exports: 'hljs'
        }
    },
    hbs: {
        disableI18n: true,
        disableHelpers: true
    },
    config: {
        text: {
            useXhr: function (url, protocol, hostname, port) {
                return true;
            }
        }
    },
    waitSeconds: 30
});