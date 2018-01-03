define([
    'Class/Base',
    'Class/Vent'
], function (Base, Vent) {
    'use strict';

    /**
     * The controller catches most published events in the system and handles 
     * each of them appropriately. You can use this pattern to coordinate events
     * from different sources.
     * 
     * Optionaly you can pass data along with the events**
     */
    return Base.extend(function Controller() {
        Vent.on('sourceA:event1', this._handleEvent1, this);
        Vent.on('sourceB:event2', this._handleEvent2, this);
    }, {

        _handleEvent1: function () {
            Vent.trigger('sourceC:event3');
        },

        _handleEvent2: function () {
            //Vent.off('sourceA:event1', this._handleEvent1, this);
        }

    });
});