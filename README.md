# A simple implementation of custom event
In the other words, it could be a demo ofcomponents communication.
### Start
Get an instance of EasyEvent.
```js
    var emitter = new EasyEvent();
```

Then bind your event.
```js
    function callback(data){
        console.log('the data is', data);
    }
    emitter.on('your-event', callback);
```

```js
    function callback(data){
        console.log('the data is', data);
    }
    // bind with once
    emitter.once('your-event', callback);
```

Finally, trigger your event.
```js
    emitter.emit('your-event', {data : 'test'});
```

Remove event.
```js
    emitter.off('your-event');
```