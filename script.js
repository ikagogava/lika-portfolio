var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("phone-menu").style.top = "0";
  } else {
    document.getElementById("phone-menu").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}