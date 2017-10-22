/*
 * @author Yatfung Yueng
 * @description A simple implementation of custom event
 */

function EasyEvent() {
    this.handleTree = {};
};

EasyEvent.prototype.on = function (eventType, handle) {
    if (typeof eventType === 'string') {
        this.handleTree[eventType]
            ? ''
            : this.handleTree[eventType] = [];
    } else {
        throw new Error('The event to be monitored must be an String type');
    }
    if (typeof handle === 'function') {
        this.handleTree[eventType].push(handle);
    } else {
        throw new Error('The second param of on must be a function');
    }
}

EasyEvent.prototype.once = function (eventType, handle) {
    var onceFn = function(){
        this.off(eventType)
        handle.apply(arguments)
    }
    this.on(eventType, onceFn)
}

EasyEvent.prototype.emit = function (event, data) {
    if (!this.handleTree[event]) return;
    var handlers = this.handleTree[event];
    setTimeout(function () {
        for (var i = 0; i < handlers.length; i++) {
            handlers[i](data)
        }
    }, 0)
}

EasyEvent.prototype.off = function (event) {
    if (!this.handleTree[event]) return;
    delete this.handleTree[event];
}
