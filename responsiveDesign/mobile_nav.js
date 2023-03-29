document.getElementById("nav-button").addEventListener("click", () => {
  document.getElementById("drawer").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("visible");
});

document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("nav-button").click();
})