const container = document.getElementById("container");
const button = document.getElementById("button");

function htmlToElement(text) {
  const div = document.createElement('div');
  div.innerHTML = text;
  return div.firstElementChild;
}


// imperative
// button.addEventListener("click", () => {
//   const div = document.createElement('div');
//   const input = document.createElement('input');
//   input.type = 'checkbox';
//   input.addEventListener('change', () => {
//     console.log('I got changed!');
//   })
//   div.appendChild(input);
//   const textNode = document.createTextNode('Click me!');
//   div.appendChild(textNode);
//   container.appendChild(div);
// });

const tag = (strings, ...vars) => {
  let result = "";
  for (let i = 0; i < vars.length; i ++) {
    result += strings[i] + vars[i].toFixed(2);
  }
  result += strings[strings.length - 1];
  return result;
}

const num1 = 10 / 3;

const output = tag`Your output is ${num1} and ${100.23948798723}.`;

console.log(output);







button.addEventListener('click', () => {
  const result = Math.random();
  const num = 10;
  const div = htmlToElement(`
    <div>
      <input type="checkbox"> ${result}
    </div>
  `);

  const input = div.querySelector('input');
  input.addEventListener('change', () => {
    console.log('I got changed!');
  });
  document.body.appendChild(div);
})




