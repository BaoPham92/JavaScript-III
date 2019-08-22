/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Relative to current context
 * 2. Block scoped / IE: this nested in window scope, returns global object
 * 3. New bindings allowing for repetition & object creation
 * 4. Abstraction of context
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding

// Console is apart of browser api
// Window global container
// console.log(this);

// Principle 2

// code example for Implicit Binding
// Function being invoked followed by a dot notation
const object = {
  someFunction: function() {
    return "I am something";
  }
};

// console.log(object.someFunction());

// Principle 3

// code example for New Binding

function PewPew(attributes) {
  this.name = attributes.name;
  this.opinion = attributes.opinion;
  this.greet = attributes.greet;
}

PewPew.prototype.fire = function () {
    return `Aim's ${this.name}, ${this.greet} ${this.opinion}`
}

const rifle = new PewPew({
  name: "ak47",
  opinion: "POP POP CHOP CHOP!",
  greet: "Reloads magazine"
});

// console.log(rifle);

// Principle 4

// code example for Explicit Binding

const semi_rifle = new PewPew({
    name: "SKS",
    opinion: "POP POP CHOP CHOP!",
    greet: "Reloads magazine"
});

// console.log(rifle.fire.call(semi_rifle));