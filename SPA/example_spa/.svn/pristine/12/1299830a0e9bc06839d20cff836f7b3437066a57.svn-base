/**
 * Vent
 * 
 * Returns an instance of the global event aggregator.  The event aggregator
 * is used to communicate throughout an Application in an event driven pattern.
 * The event aggregator should be used when communicating between two objects
 * that should otherwise not know about the operations of each other.
 * 
 * The following is an example of how to respond to an event:
 * 
 * vent.on('eventName', function() {
 *     alert('I am an event');
 * });
 * 
 * The following is an example of how to trigger an event:
 * 
 * vent.trigger('eventName');
 */
define(['backboneWreqr'], function(Wreqr) {
    return new Wreqr.EventAggregator();
});