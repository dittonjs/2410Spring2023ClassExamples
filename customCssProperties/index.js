document.body.addEventListener("mousedown", (e) => {
  const mouseMove = (e2) => {
    console.log("AM I CALLED");
    const square = document.querySelector(".square");
    square.style.setProperty('--top-offset', `${e.screenY}px`);
    square.style.setProperty('--left-offset', `${e.screenX}px`);
  }
  e.target.addEventListener("mousemove", mouseMove);

  e.target.addEventListener("mouseup", () => {
    e.target.removeEventListener("mousemove", mouseMove);
  })

})