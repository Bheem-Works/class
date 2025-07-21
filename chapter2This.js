function baz() {
  console.log("baz");
  bar();
}
function bar() {
  console.log("bar");
  foor();
  debugger;
}
function foor() {
  console.log("foo");
}

baz();

function foo() {
  console.log(this.a);
}

var a = 2;
// but this was running in the terminal; 

foo(); // 2

// implicit binding; 
// -> implicit binding is when the function is called with an object as its context, and that object is used as `this` inside the function.
function foo() {
  console.log(this.a);
}
function maan() {
  console.log(this.b);
};

var obj = {
  a:3,
  b:"this is implicit binding",
  foo: foo, // this is explicit binding
  maan:maan // this is implicit binding
}

obj.foo(); // 3
obj.maan(); // "this is implicit binding"