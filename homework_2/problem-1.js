"use strict";

let person = {
  name: "Daniel",
  sayHello: function () {
    console.log(this);
  },
  child: {
    sayHello: function () {
      console.log(this.name);
    },
  },
};

person.sayHello();

let sayHelloBound = person.child.sayHello.bind(person);

sayHelloBound();
person.child.sayHello.call(person);
person.child.sayHello.apply(person);