const fuddifyButton = document.getElementById("fuddify-button");
fuddifyButton.addEventListener("click", () => {
  const div = document.getElementById("output");
  const input = document.getElementById("user-input");
  div.innerHTML = input.value;
});
