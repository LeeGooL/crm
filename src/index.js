import Store from "./core/Store.js";
import Observable from "./core/Observable.js";
import EventEmitter from "./core/EventEmitter.js";

const store = new Store();

store.reinit();

// const ob = new Observable();

// ob.subscribe((a) => console.log('subscribe fired 1', a));
// ob.subscribe((a) => console.log('subscribe fired 2', a));

// ob.dispatch(5);

const ee = new EventEmitter();

ee.addEventListener("event1", (data) => {
  console.log("event1", data);
  ee.emit("event2", { name: "Aleksey" });
});

ee.addEventListener("event2", (data) => console.log("event2", data));

ee.emit("event1", { name: "Egor" });
