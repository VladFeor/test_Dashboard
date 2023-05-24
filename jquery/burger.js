const toggleButton = document.querySelectorAll('#toggleButton');
let panel = document.getElementById('panel');
const body = document.querySelector("body");
let pageWidth = window.innerWidth;
toggleButton.forEach(element=>{
    element.addEventListener('click', function() {
      pageWidth = window.innerWidth;
        panel.classList.toggle('open'); 
        if (pageWidth <= 1050) {
          body.classList.toggle("noscroll");
        }
       
      });
})
window.addEventListener("resize", function() {
  pageWidth = window.innerWidth;
  if (pageWidth <= 1050) {
    panel.classList.remove("open");
    
  } else {
    panel.classList.add("open");
  }
});
 pageWidth = window.innerWidth;
if (pageWidth <= 1050) {
  panel.classList.remove("open");
} else {
  panel.classList.add("open");
}