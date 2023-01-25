const data = [1,2,3,4,5];
const dataCopy = [...data.slice(0, 2), 10, ...data.slice(2)];

const customer = {
  name: "Joseph",
  age: 30,
};

const customerCopy = {age: 31, ...customer};

dataCopy[0] = 10;

// console.log(data);
// console.log(dataCopy);

function printThreeNumbers(val1, val2, val3) {
  console.log(val1);
  console.log(val2);
  console.log(val3);
}

function printMyArguments(...args) {
  console.log(args);
  args[2](3234,"asdfasdf");
}

const myFunc = (...args) => {
  console.log(args);
}


function delay(callback, duration) {
  return (...args) => {
    setTimeout(() => callback(...args), duration);
  };
}

function sayHello(name) {
  console.log("Hello, " + name);
}


const delayedSayHello = delay(sayHello, 3000);


delayedSayHello("Joseph");

