/*
 * @author Jatfung Yang
 * @description A simple implementation of custom event
 */

function EasyEvent(){
	this.handleTree = {};
};

EasyEvent.prototype.on = function(eventType, handle){
	if(typeof eventType === 'string'){
		this.handleTree[eventType] 
		? ''
		: this.handleTree[eventType] = [];
	} else {
		throw new Error('The event to be monitored must be an String type');
	}
	if(typeof handle === 'function'){
		this.handleTree[eventType].push(handle);
	} else {
		throw new Error('The second param of on must be a function');
	}
}

EasyEvent.prototype.emit = function(event, data){
	if(!this.handleTree[event]) return;
	var handlers = this.handleTree[event],
		argArr = Array.prototype.slice.call(arguments).slice(1);
	setTimeout(function(){
		for(var i = 0; i < handlers.length; i++){
			handlers[i](data)
		}
	},0)
}
