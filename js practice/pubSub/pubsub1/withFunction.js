// problem statement
// https://alpha.learnersbucket.com/s/courses/658bee23e4b0174a3cb6c294/take

const NewEvent = function(){
    this.handler = []    
    this.subscribe = function(arg){
        this.handler.push(arg)
    };
    this.unsubscribe = function(arg){
        this.handler = this.handler.filter((item)=>item != arg)
    };
    this.fire = function(o, thisObj){
        const scope  = thisObj || globalThis;
        this.handler.forEach((item)=>{
            item.call(scope, o)
        })
    }
}



/* Test cases */
// // 1st observer
const eventHandler = function (item) {
  console.log("fired: " + item);
};

// // 2nd observer
const eventHandler2 = function (item) {
  console.log("Moved: " + item);
};

const invent = new NewEvent();

// // subscribe 1st observer
invent.subscribe(eventHandler);
invent.fire('event #1');

// // unsubscribe 1st observer
invent.unsubscribe(eventHandler);
invent.fire('event #2');
// Output: "fired: event #1"

// // subscribe 1st & 2nd observer
invent.subscribe(eventHandler);
invent.subscribe(eventHandler2);
invent.fire('event #3');
// Output: "fired: event #3"
// Output: "moved: event #3"

invent.fire('event #4')

invent.unsubscribe(eventHandler2)
invent.fire('event #5')