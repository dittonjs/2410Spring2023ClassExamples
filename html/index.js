const fuddifyButton = document.getElementById("fuddify-button");

function fuddify(text) {
  return text.replaceAll("r", "w").replaceAll("R", "W");
}

const input = document.getElementById("user-input");

const callback = (e) => {
  e.stopPropagation();
  const div = document.getElementById("output");
  const fuddifiedText = fuddify(input.value);
  input.value = "";
  div.innerHTML = fuddifiedText;
}


input.addEventListener("input", (e) => {
  console.log(e);
});

input.addEventListener("blur", (e) => {
  console.log(e);
});

input.addEventListener("focus", (e) => {
  console.log(e);
});

fuddifyButton.addEventListener("click", callback);
fuddifyButton.addEventListener("click", console.log);

// fuddifyButton.removeEventListener("click", callback);

const divs = document.getElementsByTagName("div");
console.log(divs);

const bigFontElements = document.getElementsByClassName("big-font");
console.log(bigFontElements);


