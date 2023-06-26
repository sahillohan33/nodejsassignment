
const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
const subscribeMessage=(channelName)=>{
    console.log(`Thanks for Subscribing to ${channelName}`);
}
eventEmitter.addListener("subscribe",subscribeMessage);
console.log("calling event listner before removing the event.");
eventEmitter.emit("subscribe","College Wallah");
console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("subscribe",subscribeMessage);
eventEmitter.emit("subscribe","College Wallah");

/*
 Output  :
    calling event listner before removing the event.
    Thanks for Subscribing to College Wallah
    Calling event listner after removing the event.
*/

