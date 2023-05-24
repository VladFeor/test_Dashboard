var toggleButton = document.querySelectorAll('#toggleButton');
var panel = document.getElementById('panel');
toggleButton.forEach(element=>{
    element.addEventListener('click', function() {
        panel.classList.toggle('open'); 
      });
})
window.addEventListener("resize", function() {
  var pageWidth = window.innerWidth;
  var panel = document.getElementById("panel");
  if (pageWidth <= 1050) {
    panel.classList.remove("open");
  } else {
    panel.classList.add("open");
  }
});
var pageWidth = window.innerWidth;
var panel = document.getElementById("panel");
var body = document.querySelector("body");
console.log(body)
if (pageWidth <= 1050) {
  panel.classList.remove("open");
  body.classList.add("noscroll");
} else {
  panel.classList.add("open");
  body.classList.remove("noscroll");
}