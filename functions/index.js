function sayHello(name) {
  console.log(`Hello, ${name}`);
}

const sayHello2 = function() {

}

// if you only need a return statement, you can write them like this
const multiply = (num1, num2) => num1 * num2;

const sayHello3 = name => console.log(`Hello, ${name}`);

// console.log("first timeout");
// setTimeout(() => {
//   setTimeout(() => console.log(multiply(3,4)), 3000);
// }, 3000)


function findFirst(data, predicate) {
  for (let i = data.length - 1; i > -1; i--) {
    if (predicate(data[i])) {
      return data[i];
    }
  }
  return null;
}

console.log(
  findFirst(
    customers,
    customer => customer.firstName[0] === "M"
  )
);

console.log(
  findFirst(
    transactions,
    (x => !x.amount)
  )
);


