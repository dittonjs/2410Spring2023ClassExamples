
function fromHTML(text) {
  const div = document.createElement('div');
  div.innerHTML = text;
  return div.firstElementChild;
}

document.getElementById("my-button").addEventListener("click", () => {
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const div = fromHTML(`
    <div class="note" tabindex="0">
      ${title.value}
      <div class="note-content">
        ${content.value}
      </div>
    </div>
  `);
  const eventListener = () => {
    if (div.classList.contains("visible")) {
      div.classList.remove("visible");
    } else {
      div.classList.add("visible");
    }
  }
  div.addEventListener("click", eventListener);
  div.addEventListener("keydown", (e) => {
    if (e.key === " ") {
      eventListener();
    }
  })
  document.getElementById("output").appendChild(div);
})