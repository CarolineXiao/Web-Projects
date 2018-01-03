define(['underscore'], function (_) {
    "use strict";

    /**
     * inherit() returns a newly created object that inherits properties from the
     * prototype object p. It uses the ECMAScript 5 function Object.create() if it
     * is defined, and otherwise falls back to an older technique.
     * @param p
     * @returns {*}
     * @private
     */
    function _inherit(p) {
        if (p === null) {
            throw TypeError();
        }

        if (Object.create) {
            return Object.create(p);
        }

        var t = typeof p;
        if (t !== "object" && t !== "function") {
            throw TypeError();
        }

        function f() {
        };

        f.prototype = p;
        return new f();
    }

    /**
     * @param superclass
     * @param constructor
     * @param methods
     * @param statics
     * @returns {*}
     * @private
     */
    function _defineSubclass(superclass, constructor, methods, statics) {

        constructor.prototype = _inherit(superclass.prototype);
        constructor.prototype.constructor = constructor;

        constructor.extend = superclass.extend;

        if (methods) _.extend(constructor.prototype, methods);
        if (statics) _.extend(constructor, statics);


        return constructor;
    }

    Function.prototype.extend = function (constructor, methods, statics) {
        return _defineSubclass(this, constructor, methods, statics);
    };
    
    /**
     * @constructor
     */
    var Base = function() {};

    /**
     * @param constructor
     * @param methods
     * @param statics
     * @returns {*}
     */
    Base.extend = function (constructor, methods, statics) {
        return _defineSubclass(this, constructor, methods, statics);
    };

    Base.empty = function() {};
    Base.abstract = function() {
        throw new Error('Called abstract function');
    }
    Base.badMethodCall = function() {
        throw new Error('Bad method call');
    }

    return Base;
});