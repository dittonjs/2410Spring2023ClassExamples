const square = document.querySelector(".purple-square")

document.body.addEventListener("click", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  square.animate([
    {transform: `translate(${x - 64}px, ${y - 64}px)`}
  ], {
    easing: "ease",
    fill: "forwards",
    duration: 300
  }).addEventListener("finish", () => {
    square.animate()
  })
})