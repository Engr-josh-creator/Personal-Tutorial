window.onresize = screen;
window.onload = screen; //loading the size of the screen live

function screen() {
  myWidth = window.innerWidth;

  document.getElementById("size").innerHTML = "Width : " + myWidth + "px"; //The purpose of the inner html is to insert text inside our div
}
