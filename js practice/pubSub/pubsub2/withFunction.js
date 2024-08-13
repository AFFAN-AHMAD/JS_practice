function Events() {
  this.subscribeList = new Map();
  this.subscribeOnceList = new Map();
  this.subscribeOnceAsyncList = new Map();

  this.subscribe = function (name, callback) {
    const present = this.subscribeList.has(name);
    if (present) {
      const existingList = this.subscribeList.get(name);
      this.subscribeList.set(name, [...existingList, callback]);
    } else {
      this.subscribeList.set(name, [callback]);
    }

    return {
      remove: () => {
        const existingList = this.subscribeList.get(name);
        const filteredList = existingList.filter((fn) => fn != callback);
        this.subscribeList.set(name, filteredList);
      },
    };
  };

  this.subscribeOnce = function (name, callback) {
    const present = this.subscribeOnceList.has(name);
    if (present) {
      const existingList = this.subscribeOnceList.get(name);
      this.subscribeOnceList.set(name, [...existingList, callback]);
    } else {
      this.subscribeOnceList.set(name, [callback]);
    }
  };

  this.subscribeOnceAsync = async function (name) {
    return new Promise((resolve, reject) => {
      const present = this.subscribeOnceList.has(name);
      if (present) {
        const existingList = this.subscribeOnceList.get(name);
        this.subscribeOnceList.set(name, [...existingList, resolve]);
      } else {
        this.subscribeOnceList.set(name, [resolve]);
      }
    });
  };

  this.publish = function (name, data) {
    const subscribeCallBacks = this.subscribeList.get(name) || [];
    subscribeCallBacks.forEach((fn) => fn(data));

    const subscribeOnceCallBacks = this.subscribeOnceList.get(name) || [];
    subscribeOnceCallBacks.forEach((fn) => fn(data));
    this.subscribeOnceList.set(name,[])

    const subscribeOnceAsyncCallBacks =
      this.subscribeOnceAsyncList.get(name) || [];
    subscribeOnceAsyncCallBacks.forEach((fn) => fn(data));
    this.subscribeOnceAsyncList.set(name,[])

  };

  this.publishAll = function (data) {

  };
}

// Test cases
const events = new Events();

const newUserNewsSubscription = events.subscribe(
  "new-user",
  function (payload) {
    console.log(`Sending Q1 News to: ${payload}`);
  }
);

events.publish("new-user", "Jhon");

//output: "Sending Q1 News to: Jhon"

const newUserNewsSubscription2 = events.subscribe(
  "new-user",
  function (payload) {
    console.log(`Sending Q2 News to: ${payload}`);
  }
);

events.publish("new-user", "Doe");

//output: "Sending Q1 News to: Doe"
//output: "Sending Q2 News to: Doe"

newUserNewsSubscription.remove(); // Q1 news is removed

events.publish("new-user", "Foo");
//output: "Sending Q2 News to: Foo"

events.publishAll("FooBar");
//output: "Sending Q2 News to: FooBar"

events.subscribeOnce("new-user", function (payload) {
  console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once");
//output: "Sending Q2 News to: Foo Once" - normal event
//output: "I am invoked once Foo Once" - once event

events.publish("new-user", "Foo Twice");
//output: "Sending Q2 News to: Foo Twice" - normal event
// once event should not invoke for second time

events.subscribeOnceAsync("new-user").then(function (payload) {
  console.log(`I am invoked once ${payload}`);
});

events.publish("new-user", "Foo Once Async");
//output: "Sending Q2 News to: Foo Once Async"
//output: "I am invoked once Foo Once Async"















