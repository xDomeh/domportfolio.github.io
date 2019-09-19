window.addEventListener("scroll", function() {
  var nav = document.getElementById("nav");
  if (
    document.documentElement.scrollTop ||
    document.body.scrollTop > window.innerHeight
  ) {
    nav.classList.add("nav-styled");
    nav.classList.remove("nav-basic");
  } else {
    nav.classList.add("nav-basic");
    nav.classList.remove("nav-styled");
  }
});
