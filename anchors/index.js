document.getElementById("clickme").addEventListener("click", () => {
  const value = document.getElementById("my-input").value;
  window.location.href = `dashboard.html?name=${value}&age=30`;
})