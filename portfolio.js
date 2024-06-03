function myFunction(x) {
  x.classList.toggle("change");
}
//change Navbar styles on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});
