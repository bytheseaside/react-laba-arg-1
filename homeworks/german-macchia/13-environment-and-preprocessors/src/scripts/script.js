let arrow = document.querySelector(".arrow-top-icon");
arrow.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("theme");
  body.classList.toggle("theme__dark");
}
