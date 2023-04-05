async function App() {
  function wait(callback, duration) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("done")
        try {
          const result = callback();
          resolve(result);
        } catch(e) {
          reject(e);
        }
      }, duration);
    });
  }


  function doMath() {
    throw "Oops";
    return 2 * 2;
  }

  wait(doMath, 1000)
    .then((result) => console.log(result))
    .catch((e) => {
      console.log(`There was an error ${e}`);
    });

  // for(let i = 0; i < 100000; i++) {
  //   console.log(i);
  // }


  // const promise = wait(doMath, 5000);


  // promise.then((result) => {
  //   console.log("Original promise", result)
  //   return result * 2;
  // }).then((biggerResult) => {
  //   console.log("Bigger result:", biggerResult);
  //   return wait(() => biggerResult * 2, 5000);
  // }).then((biggestResult) => {
  //   console.log("Biggest Result", biggestResult);
  // });

  // fetch("/info.json").then((response) => {
  //   return response.json();
  // }).then((person) => {
  //   console.log(person);
  //   document.body.innerHTML = `Welcome ${person.name}`;
  // });


  // fetch("https://usu-quotes-mimic.vercel.app/api/random")
  //   .then(response => response.json())
  //   .then(quote => {
  //     console.log(quote);
  //   })


  function get3RandomQuote() {
    const quote1 = fetch("https://usu-quotes-mimic.vercel.app/api/random");
    const quote2 = fetch("https://usu-quotes-mimic.vercel.app/api/random");
    const quote3 = fetch("https://usu-quotes-mimic.vercel.app/api/random");
    return Promise.all([quote1, quote2, quote3]);
  }

  const results = await get3RandomQuote();

  async function wait2() {
    try {
      const result = await wait(doMath, 1000);
      console.log(result);
    } catch(e) {
      console.log(e);
    } finally {

    }
  }

  // getRandomQuote().then(console.log);
}




App()