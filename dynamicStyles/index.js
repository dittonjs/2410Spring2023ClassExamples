document.getElementById("dark-mode").addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
})

document.getElementById("theme").addEventListener("change", (e) => {
  document.body.dataset.theme = e.target.value;
});