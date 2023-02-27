const notes = [];
let ID = 0;


function fromHTML(text) {
  const div = document.createElement('div');
  div.innerHTML = text;
  return div.firstElementChild;
}

document.getElementById("my-button").addEventListener("click", () => {
  const title = document.getElementById("title");
  const content = document.getElementById("content");
  const note = {
    title: title.value,
    content: title.value,
    id: ++ID
  };

  notes.push(note);
  const div = fromHTML(`
    <div class="note" tabindex="0" data-note-id="${note.id}">
      ${title.value}
      <div class="note-content">
        ${content.value}
      </div>
      <button>Delete</button>
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
  div.querySelector("button").addEventListener("click", () => {
    div.remove();
    notes.remove(note);
  })
  document.getElementById("output").appendChild(div);
})

document.getElementById("print-notes").addEventListener("click", () => {
  console.log(notes);
})