
function toggleMenu() {
  document.getElementById("sideNav").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
}

function closeMenu() {
  document.getElementById("sideNav").classList.remove("open");
  document.getElementById("overlay").classList.remove("show");
}
