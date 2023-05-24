var toggleButton = document.querySelectorAll('#toggleButton');
var panel = document.getElementById('panel');
var body = document.querySelector("body");
toggleButton.forEach(element=>{
    element.addEventListener('click', function() {
        panel.classList.toggle('open'); 
        var pageWidth = window.innerWidth;
        if (pageWidth <= 1050) {
          body.classList.toggle("noscroll");
          
        }
       
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

console.log(body)
if (pageWidth <= 1050) {
  panel.classList.remove("open");
  
} else {
  panel.classList.add("open");
  
}