let drawerLeft = -300;
const drawer = document.getElementById("drawer")

document.getElementById("nav-button").addEventListener("click", () => {
  drawer.animate([
    {left: drawerLeft < -150 ? "0px" : "-300px"}
  ], {
    easing: "ease",
    duration: 300
  }).addEventListener("finish", () => {
    drawerLeft = drawerLeft < -150 ? 0 : -300;
    drawer.style.left = `${drawerLeft}px`;
    if (drawerLeft > -150) {
      document.getElementById("overlay").classList.add("visible");
    } else {
      document.getElementById("overlay").classList.remove("visible");
    }
  });
});

document.getElementById("overlay").addEventListener("click", () => {
  document.getElementById("nav-button").click();
});


const swipeDrawer = (startEvent) => {
  console.log(drawer.style.left);
  let x = startEvent.touches[0].clientX;

  function touchMove(e) {
    const delta = e.touches[0].clientX - x;
    x = e.touches[0].clientX;
    drawerLeft += delta;
    if (drawerLeft < -300) drawerLeft = -300;
    if (drawerLeft > 0) drawerLeft = 0;
    console.log(drawerLeft);
    drawer.style.left = `${drawerLeft}px`;
  }

  function touchEnd() {

    drawer.animate([
      {left: drawerLeft > -150 ? "0px" : "-300px"}
    ], {
      easing: "ease",
      duration: 300
    }).addEventListener("finish", () => {
      drawerLeft = drawerLeft > -150 ? 0 : -300;
      drawer.style.left = `${drawerLeft}px`;
      if (drawerLeft > -150) {
        document.getElementById("overlay").classList.add("visible");
      } else {
        document.getElementById("overlay").classList.remove("visible");
      }
    });

    window.removeEventListener("touchmove", touchMove);
    window.removeEventListener("touchend",  touchEnd)
  }

  window.addEventListener("touchmove",touchMove);
  window.addEventListener("touchend", touchEnd);

}

window.addEventListener("touchstart", (startEvent) => {
  if (startEvent.touches[0].clientX > 50) {
    return;
  }
  swipeDrawer(startEvent);
})

drawer.addEventListener("touchstart", (e) => {
  e.stopPropagation();
  swipeDrawer(e);
})
