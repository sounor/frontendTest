let i = 100;
var output = document.querySelector(".output");

while (i > 0) {
  var para = document.createElement("p");
  output.appendChild(para);
  para.textContent = i;
  i = i - 1;
}
