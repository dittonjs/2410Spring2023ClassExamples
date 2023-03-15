function function1() {
  const a = 10;
  const b = 20;
  return function function2() {
    console.log(a);
  }
}

const aNewFunction = function1();

aNewFunction();
aNewFunction();