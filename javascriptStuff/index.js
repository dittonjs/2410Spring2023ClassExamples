// const age = 1 / 2;
// const myName = "Joseph";
// const myName2 = 'Joseph';
// const myName3 = `Joseph ${age}`;
// const myBool = true || false;
// const myArray = [1,2,3,4,5,"asdf", .3, [], true];
// const myObj = { name: "Joseph", age: 30 };
// myObj.height = 6;
// myArray.height = 6;

// function doSomething() {

// }

// doSomething.height = 6;

// age.height = 6;
// console.log(myArray + myObj);
// const nullValue = null;
// const undefinedValue = undefined;
// const obj = undefined;

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let num = 0;
// while(num < 10) {
//   console.log(num);
//   num++;
// }

// const data = [123,24,333,42,45,56];
// data[2] = 123;

// if () {
//   console.log("I am truthy");
// } else {
//   console.log("I am falsey");
// }

function getRandomNumber(max) {
  return parseFloat((Math.random() * max).toFixed(2));
}

const sayHello = function() {
  console.log("Hello!");
}

(function() {
  console.log("I get called immediately!");
})();

const alias = getRandomNumber;

console.log(alias(100))

