
const body = document.querySelector(".body");

function handleBodyColor() {
  const currentWidth = window.innerWidth;
  console.log("작동")

  if (currentWidth < 800) {
    body.classList.remove("small-screen");
    body.classList.add("smaller-screen");
  } else if (currentWidth < 1300) {
    body.classList.remove("smaller-screen", "medium-screen");
    body.classList.add("small-screen");
  } else {
    body.classList.remove("small-screen");
    body.classList.add("medium-screen");
  }
}

window.addEventListener("resize", handleBodyColor);