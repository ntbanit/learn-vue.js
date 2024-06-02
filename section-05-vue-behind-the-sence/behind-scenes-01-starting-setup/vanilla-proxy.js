const data = {
  message: "Hello!",
  longMessage: "Hello World!",
};
const handler = {
  set(target, key, value) {
    console.log(" target = " + target);
    console.log(" key = " + key);
    console.log(" value = " + value);
    if (key === "message") {
      target.longMessage = value + " World!";
    }
    target.message = value;
  },
};
const proxy = new Proxy(data, handler);
proxy.message = "Hello from Proxy!";
console.log(proxy.message);
console.log(proxy.longMessage);
